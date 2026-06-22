import { DOM } from "@js/shared/dom.js";

import { createAddToCartController } from "./controller.js";
import { bindAddToCartEvents } from "./events.js";

export function initializeAddToCart({
    quantityController,
    cartController,
}) {
    const addToCartController =
        createAddToCartController({
            quantityController,
            cartController,
        });

    bindAddToCartEvents({
        addToCartButton:
            DOM.addToCartButton,

        addToCartController,
    });

    return addToCartController;
}