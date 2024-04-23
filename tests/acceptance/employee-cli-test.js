import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'employee-cli/tests/helpers';

module('Acceptance | employee cli', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Employee CLI');
    assert.dom('.jumbo a.button').hasText('Courses');
    await click('.jumbo a.button');
    assert.strictEqual(currentURL(), '/courses');
  });

  test('visiting /courses', async function (assert) {
    await visit('/courses');
    assert.strictEqual(currentURL(), '/courses');
    assert.dom('h2').hasText('Available Courses');
  });
});
