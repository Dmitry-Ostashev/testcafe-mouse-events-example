import { Selector } from 'testcafe';
import triggerMouseEvent from '../helpers/mouse-helper';

fixture`Fixture`
    .page`http://devexpress.github.io/testcafe/example`;

test('Test', async t => {
    await t.click('#tried-test-cafe');

    const slider = Selector('span.ui-slider-handle.ui-corner-all');

    await triggerMouseEvent(slider, 'mousedown');

    await t.wait(1000);

    await triggerMouseEvent(slider, 'mousemove', { clientX: 300 });

    await t.wait(1000);

    await triggerMouseEvent(slider, 'mouseup');

    await t.debug();
});