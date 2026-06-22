import { addSafeEventListener } from "@js/shared";

export function bindAddToCartEvents({
    addToCartButton,
    addToCartController,
}) {
    addSafeEventListener(addToCartButton, "click", addToCartController.addToCart, "Add To Cart Button Click");
}