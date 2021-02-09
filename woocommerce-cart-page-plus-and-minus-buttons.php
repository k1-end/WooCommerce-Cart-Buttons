<?php

/**
 * Plugin Name:       Woocommerce cart buttons
 * Plugin URI:        https://k1-end.github.io/
 * Description:       Adds plus and minus button to Woocommerce cart page
 * Version:           1
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Keyvan
 * Author URI:        https://k1-end.github.io/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       woocommerce-cart-page-plus-and-minus-buttons
 * Domain Path:       /languages
 */

//Check if woocommerce is active
if (in_array('woocommerce/woocommerce.php' , get_option('active_plugins'))) {
   // Only run if there's no other class with this name
  if ( !class_exists('Woocommerce_cart_buttons')){
    class Woocommerce_cart_buttons{

      public function __construct(){
        add_action('woocommerce_before_quantity_input_field' , array ($this , 'minus_sign'));
        add_action('woocommerce_after_quantity_input_field' , array ($this , 'plus_sign'));
        add_action('wp_enqueue_scripts', array($this , 'load_scripts'));
      }

      public function minus_sign() {
        ?>
        <button class="woocommerce_cart_buttons_minus_btn">-</button>
        <?php
      }

      public function plus_sign() {
        ?>
        <button class="woocommerce_cart_buttons_plus_btn">+</button>
        <?php
      }

      public function load_scripts(){
        if(is_cart()){
          wp_enqueue_script( 'woocommerce-cart-buttons',plugins_url( 'js/woocommerce-cart-page-plus-and-minus-buttons.js', __FILE__ ) , array('jquery'), '1', true );
        }
      }
    }
    new Woocommerce_cart_buttons();
  }
}
