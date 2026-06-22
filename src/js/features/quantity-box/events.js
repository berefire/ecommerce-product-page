import { addSafeEventListener } from "@js/shared/dom.js";

export function bindQuantityEvents({
    increaseButton,
    decreaseButton,
    quantityController,
}) {
    addSafeEventListener(increaseButton, "click", quantityController.increase, "Quantity Increase Button Click");
    addSafeEventListener(decreaseButton, "click", quantityController.decrease, "Quantity Decrease Button Click");
}