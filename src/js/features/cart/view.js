export function createCartView({
    badgeElement,
    emptyMessageElement,
    cartContentElement,
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
            cartContentElement.hidden = true;
            checkoutButton.hidden = true;

            return;
        }
        
        const total = item.price * item.quantity;

        badgeElement.hidden = false;
        badgeElement.textContent = item.quantity;
        emptyMessageElement.hidden = true;
        cartContentElement.hidden = false;
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