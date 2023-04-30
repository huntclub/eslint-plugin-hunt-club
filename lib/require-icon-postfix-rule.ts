import {ESLintUtils} from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://example.com/rule/${name}`
);

const rule = createRule({
  name: 'reqire-icon-postfix',
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value !== 'lucide-react') {
          return;
        }

        const specifiers = node.specifiers;

        if (specifiers.length === 0) {
          return;
        }

        specifiers.forEach((specifier) => {
          if (specifier.type !== 'ImportSpecifier') {
            context.report({
              messageId: 'noDefault',
              node: specifier,
            });
            return;
          }

          if (!specifier.imported.name.endsWith('Icon')) {
            context.report({
              messageId: 'iconRequired',
              node: specifier.imported,
            });
            return;
          }

          if (specifier.imported.name != specifier.local.name) {
            context.report({
              messageId: 'noAlias',
              node: specifier.local,
            });
            return;
          }
        });
      },
    };
  },
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Require the `Icon` postfix for all Lucide icon components',
      recommended: 'error',
    },
    messages: {
      iconRequired: 'Import of all icons must be postfixed with `Icon`',
      noAlias: 'Do not alias icon imports.',
      noDefault: 'Default import is disallowed. Please use the named exports.',
    },
    schema: [],
  },
  defaultOptions: [],
});

export default rule;
