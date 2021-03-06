import { visit } from '@ember/test-helpers';
import percySnapshot from '@percy/ember';
import { a11yAudit } from 'ember-a11y-testing/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { setupPageTitleTest } from 'ember-website/tests/helpers/page-title';
import { module, test } from 'qunit';

module('Acceptance | editions/octane', function (hooks) {
  setupApplicationTest(hooks);
  setupPageTitleTest(hooks);

  test('Percy snapshot', async function (assert) {
    await visit('/editions/octane');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('Accessibility audit', async function (assert) {
    await visit('/editions/octane');
    await a11yAudit({
      rules: {
        'aria-valid-attr-value': {
          enabled: false,
        },
        'heading-order': {
          enabled: false,
        },
      },
    });

    assert.hasPageTitle('Octane - Editions - Ember.js');
  });
});
