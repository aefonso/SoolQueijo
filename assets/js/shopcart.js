/* Definir taxas + misc */
var taxRate = 0.05;
var shippingRate = 5.49;
var fadeTime = 300;


/* Atribuir ações */
$('.product-quantity input').change(function() {
    updateQuantity(this);
});

$('.product-removal button').click(function() {
    removeItem(this);
});



/* Recalcular carrinho */
function recalculateCart() {
    var subtotal = 0;

    /* Soma os totais */
    $('.product').each(function() {
        subtotal += parseFloat($(this).children('.product-line-price').text());
    });

    /* Calcular totais */
    var tax = subtotal * taxRate;
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal - tax - shipping;

    /* Atualizar exibição de totais */
    $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('#cart-shipping').html(shipping.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        if (total == 0) {
            $('.checkout').fadeOut(fadeTime);
        } else {
            $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
    });
}


/* Quantidade de atualização */
function updateQuantity(quantityInput) {
    /* Calcular o preço */
    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    /* Atualizar a exibição do preço da linha e recalcular os totais do carrinho */
    productRow.children('.product-line-price').each(function() {
        $(this).fadeOut(fadeTime, function() {
            $(this).text(linePrice.toFixed(2));
            recalculateCart();
            $(this).fadeIn(fadeTime);
        });
    });
}


/* Remover o item do carrinho */
function removeItem(removeButton) {
    /* Remova a linha do DOM e recalcule o total do carrinho */
    var productRow = $(removeButton).parent().parent();
    productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
    });

}