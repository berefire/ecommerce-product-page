import { DOM } from "@js/shared";

import { createCartController } from "./controller.js";
import { createCartView } from "./view.js";
import { bindCartEvents } from "./events.js";

export function initializeCart() {
    const cartView =
        createCartView({
            badgeElement: DOM.cartBadge,
            emptyMessageElement: DOM.cartEmptyMessage,
            cartFilledContentElement: DOM.cartFilledContent,
            imageElement: DOM.cartProductImage,
            titleElement: DOM.cartProductTitle,
            priceElement: DOM.cartProductPrice,
            quantityElement: DOM.cartProductQuantity,
            totalElement: DOM.cartProductTotal,
            checkoutButton: DOM.cartCheckoutButton,
            cartButton: DOM.cartButton,
        });

    const cartController =
        createCartController({
            cartView,
            cartDialog: DOM.cartDialog,
            cartButton: DOM.cartButton,
        });

    bindCartEvents({
        cartButton: DOM.cartButton,
        closeButton: DOM.cartCloseButton,
        deleteButton: DOM.cartDeleteButton,
        checkoutButton: DOM.cartCheckoutButton,
        cartDialog: DOM.cartDialog,
        cartController,
    });

    return cartController;
}