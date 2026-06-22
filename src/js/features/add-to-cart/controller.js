import { PRODUCT_IMAGES } from "@js/shared";

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