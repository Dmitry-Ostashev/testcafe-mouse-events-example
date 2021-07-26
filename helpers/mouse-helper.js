import { ClientFunction } from 'testcafe';

export default function triggerMouseEvent (selector, type, options) {
    const dispatchFunc = ClientFunction((type, options = {}) => {
        options.bubbles    = true;
        options.cancelable = true;
        options.view       = window;

        let event = null;

        if (typeof(MouseEvent) === 'function')
            event = new MouseEvent(type, options);
        else {
            event = document.createEvent('MouseEvent');
            event.initMouseEvent(type, true, true, window, 0, 0, 0, options.clientX || 0, options.clientY || 0, false, false, false, false, 0, null);
        }
        const targetElement = elementSelector();

        targetElement.dispatchEvent(event);
    }, { dependencies: { elementSelector: selector } });

    return dispatchFunc(type, options);
}