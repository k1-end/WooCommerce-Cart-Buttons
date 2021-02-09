(function($){
  $(document).ready(function () {
    woo_cart_btns();
  });
  $(document).ajaxComplete(function () {
    woo_cart_btns();
  });

  function woo_cart_btns() {
    $('.woocommerce_cart_buttons_minus_btn').off('click').each(function(){
      $(this).click(function(event){
        event.preventDefault();
        input = $(this).siblings('input');
        current_value = input.attr('value');
        min_value = input.attr('value');
        if (current_value > 1){
          input.attr( 'value' , current_value - 1).trigger('change');
        }
      });
    });
    $('.woocommerce_cart_buttons_plus_btn').off('click').each(function(){
      $(this).click(function(event){
        event.preventDefault();
        input = $(this).siblings('input');
        current_value = input.attr('value');
        max_value = input.attr('max');
        if (!max_value || current_value<max_value){
          input.attr('value',String(parseInt(current_value)+ 1)).trigger('change');
        }
      });
    });
  }
})(jQuery);
