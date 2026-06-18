import { addSafeEventListener } from "../../shared/dom.js";

export function bindAddToCartEvents({
    addToCartButton,
    addToCartController,
}) {
    addSafeEventListener(addToCartButton, "click", addToCartController.addToCart, "Add To Cart Button Click");
}