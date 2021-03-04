import { ClientFunction } from 'testcafe';

export default function triggerMouseEvent (selector, type, options) {
    const dispatchFunc = ClientFunction((type, options = {}) => {
        options.bubbles    = true;
        options.cancelable = true;
        options.view       = window;

        const event         = new MouseEvent(type, options);
        const targetElement = elementSelector();

        targetElement.dispatchEvent(event);
    }, { dependencies: { elementSelector: selector } });

    return dispatchFunc(type, options);
}