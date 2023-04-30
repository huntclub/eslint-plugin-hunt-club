import rule from '../require-icon-postfix-rule';
import {RuleTester} from 'eslint';

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

// For some reason, the rule options are incompatible, but this rule has no options
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
ruleTester.run('require-icon-postfix-rule', rule, {
  valid: [
    {
      code: `
      import {SomeIcon, AnotherIcon} from 'lucide-react';
      `,
    },
    {
      code: `
      import NotLucide from 'not-lucide-react';
      `,
    },
    {
      code: `
      import {NotLucide} from 'not-lucide-react';
      `,
    },
    {
      code: `import 'lucide-react';`,
    },
    {
      code: `import {} from 'lucide-react';`,
    },
  ],

  invalid: [
    {
      code: `import {SomeIcon, Another} from 'lucide-react';`,
      errors: [{messageId: 'iconRequired'}],
    },
    {
      code: `import {SomeIcon as Some} from 'lucide-react';`,
      errors: [{messageId: 'noAlias'}],
    },
    {
      code: `import * as Icons from 'lucide-react';`,
      errors: [{messageId: 'noDefault'}],
    },
  ],
});
