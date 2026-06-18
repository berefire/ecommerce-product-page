import { addSafeEventListener } from "../../shared/dom.js";

export function bindCartEvents({
    cartButton,
    closeButton,
    deleteButton,
    checkoutButton,
    cartDialog,
    cartController,
}) {
    addSafeEventListener(
        cartButton,
        "click",
        cartController.openCart,
        "Cart Button",
    );

    addSafeEventListener(
        closeButton,
        "click",
        cartController.closeCart,
        "Cart Close Button",
    );

    addSafeEventListener(
        deleteButton,
        "click",
        cartController.clearCart,
        "Delete Cart Item Button",
    );

    addSafeEventListener(
        checkoutButton,
        "click",
        () => {
            cartController.clearCart();
            cartController.closeCart();
        },
        "Checkout Button",
    );

    // Escape

    addSafeEventListener(
        cartDialog,
        "cancel",
        (event) => {
            event.preventDefault();

            cartController.closeCart();
        },
        "Cart Dialog Escape",
    );

    // Click fuera del dialog

    addSafeEventListener(
        cartDialog,
        "click",
        (event) => {
            if (event.target === cartDialog) {
                cartController.closeCart();
            }
        },
        "Cart Dialog Backdrop",
    );
}