export function createCartView({
    badgeElement,
    emptyMessageElement,
    cartFilledContentElement,
    imageElement,
    titleElement,
    priceElement,
    quantityElement,
    totalElement,
    checkoutButton,
}) {
    function render(item){
        if(!item){
            badgeElement.hidden = true;

            emptyMessageElement.hidden = false;
            cartFilledContentElement.hidden = true;
            checkoutButton.hidden = true;

            return;
        }
        
        const total = item.price * item.quantity;

        badgeElement.hidden = false;
        badgeElement.textContent = item.quantity;
        emptyMessageElement.hidden = true;
        cartFilledContentElement.hidden = false;
        checkoutButton.hidden = false;

        imageElement.src = item.image;
        imageElement.alt = item.name;

        titleElement.textContent = item.name;
        priceElement.textContent = `$${item.price.toFixed(2)}`;
        quantityElement.textContent = item.quantity;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    return {
        render,
    };
}