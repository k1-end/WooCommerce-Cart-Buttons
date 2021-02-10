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
        current_value = parseFloat(input.attr('value'));
        min_value = parseFloat(input.attr('min'));
        if (!min_value) {
          min_value=0;
        }
        step = parseFloat(input.attr('step'));
        new_value = current_value - step;
	if(new_value < min_value){
		new_value = min_value;
	}
        if (new_value >= min_value ){
          input.attr( 'value' , new_value).trigger('change');
        }
      });
    });
    $('.woocommerce_cart_buttons_plus_btn').off('click').each(function(){
      $(this).click(function(event){
        event.preventDefault();
        input = $(this).siblings('input');
        current_value = parseFloat(input.attr('value'));
        max_value = parseFloat(input.attr('max'));
        step = parseFloat(input.attr('step'));
        new_value = current_value + step;
        if (!max_value || new_value<max_value){
          input.attr('value',new_value).trigger('change');
        }
      });
    });
  }
})(jQuery);
