import { PRODUCT_IMAGES } from "../../shared/constants.js";

export function createAddToCartController({ quantityController, cartController}) {
    function addToCart(){
        const quantity =  quantityController.getValue();

        if (quantity === 0) {
            return;
        }

        cartController.addItem({
            name: "Fall Limited Edition Sneakers",
            price: 125,
            quantity: quantity,
            image: PRODUCT_IMAGES[0].thumbnail,
        });

        quantityController.reset();
    }

    return {
        addToCart,
    };
}