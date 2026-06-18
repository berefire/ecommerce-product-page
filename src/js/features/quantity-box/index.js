import { DOM } from "../../shared/dom.js";

import { createQuantityBoxController } from "./controller.js";
import { bindQuantityEvents } from "./events.js";

export function initializeQuantityBox() {
    const quantityController = createQuantityBoxController({
            inputElement: DOM.quantityInput,
        });

    bindQuantityEvents({
        increaseButton:
            DOM.quantityIncreaseButton,

        decreaseButton:
            DOM.quantityDecreaseButton,

        quantityController,
    });

    return quantityController;
}