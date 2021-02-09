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
        min_value = input.attr('min');
        step = input.attr('step');
        new_value = current_value - step;
        if (new_value > min_value || (!min_value && new_value>0)){
          input.attr( 'value' , new_value).trigger('change');
        }
      });
    });
    $('.woocommerce_cart_buttons_plus_btn').off('click').each(function(){
      $(this).click(function(event){
        event.preventDefault();
        input = $(this).siblings('input');
        current_value = input.attr('value');
        max_value = input.attr('max');
        step = input.attr('step');
        new_value = current_value - step;
        if (!max_value || new_value<max_value){
          input.attr('value',new_value).trigger('change');
        }
      });
    });
  }
})(jQuery);
