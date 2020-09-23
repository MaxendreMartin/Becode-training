<?php
/**
 * Kadence\Woocommerce\Component class
 *
 * @package kadence
 */

namespace Kadence\Woocommerce;

use Kadence\Component_Interface;
use function Kadence\kadence;
use function add_action;
use function add_theme_support;
use function have_posts;
use function the_post;
use function is_search;
use function get_template_part;
use function get_post_type;
use function woocommerce_catalog_ordering;
use function woocommerce_result_count;
use WPSEO_Primary_Term;

/**
 * Class for adding Woocommerce plugin support.
 */
class Component implements Component_Interface {

	/**
	 * Holds the bool for cart in header.
	 *
	 * @var bool based on the theme settings.
	 */
	public static $cart_in_header = null;

	/**
	 * Gets the unique identifier for the theme component.
	 *
	 * @return string Component slug.
	 */
	public function get_slug() : string {
		return 'woocommerce';
	}

	/**
	 * Adds the action and filter hooks to integrate with WordPress.
	 */
	public function initialize() {

		add_action( 'wp_enqueue_scripts', array( $this, 'action_enqueue_scripts' ) );

		add_action( 'after_setup_theme', array( $this, 'action_add_woocommerce_support' ) );
		// Remove default wrappers.
		remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper' );
		remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end' );
		// Remove Default Woo Sidebar.
		remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar' );
		// Remove default Woo archive title meta.
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
		// Remove default descrption output.
		remove_action( 'woocommerce_archive_description', 'woocommerce_taxonomy_archive_description' );
		// Remove Breadcrumbs.
		remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );
		// Add Product Above Area Breadcrumb.
		add_action( 'woocommerce_before_single_product', array( $this, 'output_product_above' ), 20 );
		// Add Product Above Area title.
		add_action( 'woocommerce_before_main_content', array( $this, 'output_product_above_title' ), 5 );
		// Add custom wrappers.
		add_action( 'woocommerce_before_main_content', array( $this, 'output_content_wrapper' ) );
		add_action( 'woocommerce_after_main_content', array( $this, 'output_content_wrapper_end' ) );
		// Remove Default Title.
		add_filter( 'woocommerce_show_page_title', '__return_false', 20 );
		// Add Woo archive title meta.
		add_action( 'woocommerce_before_shop_loop', array( $this, 'archive_loop_top' ), 20 );
		// Add Single product controls.
		add_action( 'woocommerce_before_single_product', array( $this, 'single_product_layout' ), 20 );
		// Add Single product reviews css.
		add_action( 'woocommerce_after_single_product_summary', array( $this, 'single_product_comment_css' ), 5 );
		// Loop Start.
		add_filter( 'woocommerce_product_loop_start', array( $this, 'product_loop_start' ), 5 );
		add_filter( 'kadence_blocks_carousel_woocommerce_product_loop_start', array( $this, 'product_loop_start' ), 5 );
		// Add Post grid class.
		add_filter( 'post_class', array( $this, 'add_woo_entry_classes' ), 20, 3 );
		// Add category grid class.
		add_filter( 'product_cat_class', array( $this, 'add_woo_cat_entry_classes' ), 20, 3 );
		// Remove standard link open for products.
		remove_action( 'woocommerce_before_shop_loop_item', 'woocommerce_template_loop_product_link_open' );
		remove_action( 'woocommerce_after_shop_loop_item', 'woocommerce_template_loop_product_link_close', 5 );
		// Image Link.
		add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'archive_loop_image_link_open' ), 5 );
		add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'archive_loop_image_link_close' ), 50 );
		// Content Wrap.
		add_action( 'woocommerce_shop_loop_item_title', array( $this, 'archive_content_wrap_start' ), 5 );
		add_action( 'woocommerce_after_shop_loop_item', array( $this, 'archive_content_wrap_end' ), 50 );
		add_action( 'woocommerce_shop_loop_subcategory_title', array( $this, 'archive_content_wrap_start' ), 5 );
		add_action( 'woocommerce_after_subcategory_title', array( $this, 'archive_content_wrap_end' ), 50 );
		// Title Link.
		remove_action( 'woocommerce_shop_loop_item_title', 'woocommerce_template_loop_product_title' );
		add_action( 'woocommerce_shop_loop_item_title', array( $this, 'archive_title_with_link' ) );
		// Excerpt.
		add_action( 'woocommerce_after_shop_loop_item_title', array( $this, 'archive_excerpt' ), 20 );
		add_filter( 'archive_woocommerce_short_description', 'wptexturize' );
		add_filter( 'archive_woocommerce_short_description', 'wpautop' );
		add_filter( 'archive_woocommerce_short_description', 'shortcode_unautop' );
		add_filter( 'archive_woocommerce_short_description', 'do_shortcode', 11 );
		// Add to cart wrap.
		add_action( 'woocommerce_after_shop_loop_item', array( $this, 'archive_action_wrap_start' ), 5 );
		add_action( 'woocommerce_after_shop_loop_item', array( $this, 'archive_action_wrap_end' ), 20 );
		// Add to cart.
		add_filter( 'woocommerce_product_loop_start', array( $this, 'add_filter_for_add_to_cart_link' ) );
		add_filter( 'woocommerce_product_loop_end', array( $this, 'remove_filter_for_add_to_cart_link' ) );
		// My Account.
		add_action( 'woocommerce_before_account_navigation', array( $this, 'myaccount_nav_wrap_start' ), 2 );
		add_action( 'woocommerce_before_account_navigation', array( $this, 'myaccount_nav_avatar' ), 20 );
		add_action( 'woocommerce_after_account_navigation', array( $this, 'myaccount_nav_wrap_end' ), 50 );

		// Cart.
		add_action( 'woocommerce_before_cart', array( $this, 'cart_form_wrap_before' ) );
		add_action( 'woocommerce_after_cart', array( $this, 'cart_form_wrap_after' ) );
		add_action( 'woocommerce_before_cart_table', array( $this, 'cart_summary_title' ) );
		// Move Cross sell below.
		remove_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display' );
		add_action( 'woocommerce_after_cart', 'woocommerce_cross_sell_display' );
		// Change croll sells columns and limit.
		add_filter( 'woocommerce_cross_sells_columns', array( $this, 'cross_sell_columns' ), 20 );
		add_filter( 'woocommerce_cross_sells_total', array( $this, 'cross_sell_limit' ), 20 );

		add_action( 'kadence_before_main_content', array( $this, 'wc_print_notices_none_woo' ) );
		// Add Fragment Support.
		add_action( 'init', array( $this, 'check_for_fragment_support' ) );

		// Add my Account Navigation Classes.
		add_filter( 'body_class', array( $this, 'my_account_body_classes' ) );

		// Add single product Button Classes.
		add_filter( 'body_class', array( $this, 'single_product_body_classes' ) );

		// Add Store Notice Body Class.
		add_filter( 'body_class', array( $this, 'store_notice_body_classes' ) );
		// Filter product blocks grid html.
		add_filter( 'woocommerce_blocks_product_grid_item_html', array( $this, 'custom_block_html' ), 2, 3 );
		// Change related products columns.
		add_filter( 'woocommerce_output_related_products_args', array( $this, 'related_products_columns' ), 20 );

	}
	/**
	 * Sets columns for related columns.
	 *
	 * @param array $args for the related columns.
	 * @return array updated args array.
	 */
	public function related_products_columns( $args ) {
		$columns = absint( kadence()->option( 'product_related_columns' ) );
		$args['posts_per_page'] = $columns;
		$args['columns'] = $columns;
		return $args;
	}
	/**
	 * Adds arrow icon to product action buttons.
	 *
	 * @param string $html the html for the product block.
	 * @param object $data block product object.
	 * @param object $product block product object.
	 * @return string updated html.
	 */
	public function custom_block_html( $html, $data, $product ) {
		$attributes = array(
			'aria-label'       => $product->add_to_cart_description(),
			'data-quantity'    => '1',
			'data-product_id'  => $product->get_id(),
			'data-product_sku' => $product->get_sku(),
			'rel'              => 'nofollow',
			'class'            => 'wp-block-button__link add_to_cart_button',
		);

		if ( $product->supports( 'ajax_add_to_cart' ) ) {
			$attributes['class'] .= ' ajax_add_to_cart';
		}
		$product_btn_style = kadence()->option( 'product_archive_button_style' );
		if ( 'button' === $product_btn_style ) {
			$cart_text = sprintf(
				'<a href="%s" %s>%s</a>',
				esc_url( $product->add_to_cart_url() ),
				wc_implode_html_attributes( $attributes ),
				esc_html( $product->add_to_cart_text() ) . ' ' . kadence()->get_icon( 'spinner' ) . ' ' . kadence()->get_icon( 'check' )
			);
		} else {
			$cart_text = sprintf(
				'<a href="%s" %s>%s</a>',
				esc_url( $product->add_to_cart_url() ),
				wc_implode_html_attributes( $attributes ),
				esc_html( $product->add_to_cart_text() ) . ' ' . kadence()->get_icon( 'arrow-right-alt' ) . ' ' . kadence()->get_icon( 'spinner' ) . ' ' . kadence()->get_icon( 'check' )
			);
		}
		$action_button = '<div class="wp-block-button wc-block-grid__product-add-to-cart">' . $cart_text . '</div>';
		$new_data = (object) array(
			'permalink' => $data->permalink,
			'image'     => $data->image,
			'title'     => $data->title,
			'rating'    => $data->rating,
			'price'     => $data->price,
			'badge'     => $data->badge,
			'button'    => ( ! empty ( $data->button ) ? $action_button : '' ),
		);
		$product_style     = kadence()->option( 'product_archive_style' );
		$action_style      = 'woo-archive-' . esc_attr( $product_style );
		$button_style      = 'woo-archive-btn-' . esc_attr( $product_btn_style );
		$boxed = kadence()->option( 'product_archive_content_style' );
		if ( 'unboxed' === $boxed || 'boxed' === $boxed ) {
			$boxed_class = 'product-loop-' . $boxed;
		} else {
			$boxed_class = 'product-loop-unboxed';
		}
		return "<li class=\"wc-block-grid__product entry loop-entry content-bg {$action_style} {$button_style} {$boxed_class}\">
				<a href=\"{$new_data->permalink}\" class=\"wc-block-grid__product-link\">
					{$new_data->image}
				</a>
				{$new_data->badge}
				<div class=\"product-details content-bg entry-content-wrap\">
					<a href=\"{$new_data->permalink}\" class=\"wc-block-grid__product-title-link\">
						{$new_data->title}
					</a>
					{$new_data->rating}
					{$new_data->price}
					{$new_data->button}
				</div>
			</li>";
	}
	/**
	 * Adds comment css for reviews.
	 */
	public function single_product_comment_css() {
		kadence()->print_styles( 'kadence-comments' );
	}
	/**
	 * Removes hooks and triggers other hooks realted to the single product page.
	 */
	public function single_product_layout() {
		// Product Single Cat.
		$category_element = kadence()->option( 'product_content_element_category' );
		if ( isset( $category_element ) && is_array( $category_element ) && true === $category_element['enabled'] ) {
			add_action( 'woocommerce_single_product_summary', array( $this, 'woocommerce_product_single_category' ), 3 );
		}
		// Product Title.
		$title_element = kadence()->option( 'product_content_element_title' );
		if ( isset( $title_element ) && is_array( $title_element ) && false === $title_element['enabled'] ) {
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
		}
		// Product Rating.
		$rating_element = kadence()->option( 'product_content_element_rating' );
		if ( isset( $rating_element ) && is_array( $rating_element ) && false === $rating_element['enabled'] ) {
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating' );
		}
		// Product Price.
		$price_element = kadence()->option( 'product_content_element_price' );
		if ( isset( $price_element ) && is_array( $price_element ) && false === $price_element['enabled'] ) {
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price' );
		} else {
			if ( isset( $price_element ) && is_array( $price_element ) && true === $price_element['show_shipping'] ) {
				add_filter( 'woocommerce_get_price_html', array( $this, 'add_shipping_statement_price' ), 10, 2 );
			}
		}
		// Product Excerpt.
		$excerpt_element = kadence()->option( 'product_content_element_excerpt' );
		if ( isset( $excerpt_element ) && is_array( $excerpt_element ) && false === $excerpt_element['enabled'] ) {
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
		}
		// Product Cart.
		$add_to_cart_element = kadence()->option( 'product_content_element_add_to_cart' );
		if ( isset( $add_to_cart_element ) && is_array( $add_to_cart_element ) && false === $add_to_cart_element['enabled'] ) {
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
		}
		// Product Extras.
		$extras_element = kadence()->option( 'product_content_element_extras' );
		if ( isset( $extras_element ) && is_array( $extras_element ) && true === $extras_element['enabled'] ) {
			add_action( 'woocommerce_single_product_summary', array( $this, 'woocommerce_product_single_extras' ), 35 );
		}
		// Product Payments.
		$payments_element = kadence()->option( 'product_content_element_payments' );
		if ( isset( $payments_element ) && is_array( $payments_element ) && true === $payments_element['enabled'] ) {
			add_action( 'woocommerce_single_product_summary', array( $this, 'woocommerce_product_single_payments' ), 38 );
		}
		// Product Meta.
		$meta_element = kadence()->option( 'product_content_element_product_meta' );
		if ( isset( $meta_element ) && is_array( $meta_element ) && false === $meta_element['enabled'] ) {
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
		}
		// Product Sharing.
		$sharing_element = kadence()->option( 'product_content_element_sharing' );
		if ( isset( $sharing_element ) && is_array( $sharing_element ) && false === $sharing_element['enabled'] ) {
			remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50 );
		}
		// Remove Weight and Dimensions.
		if ( false === kadence()->option( 'product_additional_weight_dimensions' ) ) {
			add_filter( 'wc_product_enable_dimensions_display', '__return_false' );
		}
		// Related Products.
		if ( false === kadence()->option( 'product_related' ) ) {
			remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );
		}
	}
	/**
	 * Adds a shipping price after the price on single product pages.
	 *
	 * @param string $price the price for the product.
	 * @param object $object product object.
	 * @return string Filtered body classes.
	 */
	public function add_shipping_statement_price( $price, $object ) {
		if ( is_product() && get_queried_object_id() === $object->get_id() ) {
			$price_element = kadence()->option( 'product_content_element_price' );
			if ( isset( $price_element ) && is_array( $price_element ) && isset( $price_element['shipping_statement'] ) && ! empty( $price_element['shipping_statement'] ) ) {
				$price = $price . ' <span class="brief-shipping-details">' . $price_element['shipping_statement'] . '</span>';
			}
		}
		return $price;
	}
	/**
	 * Adds single product category.
	 */
	public function woocommerce_product_single_category() {
		global $post;
		$main_term = false;
		if ( class_exists( 'WPSEO_Primary_Term' ) ) {
			$wpseo_term = new WPSEO_Primary_Term( 'product_cat', $post->ID );
			$wpseo_term = $wpseo_term->get_primary_term();
			$wpseo_term = get_term( $wpseo_term );
			if ( is_wp_error( $wpseo_term ) ) {
				$main_term = false;
			} else {
				$main_term = $wpseo_term;
			}
		} elseif ( class_exists( 'RankMath' ) ) {
			$wpseo_term = get_post_meta( $post->ID, 'rank_math_primary_category', true );
			if ( $wpseo_term ) {
				$wpseo_term = get_term( $wpseo_term );
				if ( is_wp_error( $wpseo_term ) ) {
					$main_term = false;
				} else {
					$main_term = $wpseo_term;
				}
			} else {
				$main_term = false;
			}
		}
		if ( false === $main_term ) {
			$main_term = '';
			$terms     = wp_get_post_terms(
				$post->ID,
				'product_cat',
				array(
					'orderby' => 'parent',
					'order'   => 'DESC',
				)
			);
			if ( $terms && ! is_wp_error( $terms ) ) {
				if ( is_array( $terms ) ) {
					$main_term = $terms[0];
				}
			}
		}
		if ( $main_term ) {
			$term_title = $main_term->name;
			echo '<div class="single-product-category">';
			echo '<a href="' . esc_attr( get_term_link( $main_term->slug, 'product_cat' ) ) . '" class="product-single-category single-category">';
			echo esc_html( $term_title );
			echo '</a>';
			echo '</div>';
		}
	}
	/**
	 * Adds Product Extras just below the button.
	 */
	public function woocommerce_product_single_extras() {
		$extras_element = kadence()->option( 'product_content_element_extras' );
		echo '<div class="single-product-extras">';
		if ( isset( $extras_element ) && is_array( $extras_element ) && isset( $extras_element['title'] ) && ! empty( $extras_element['title'] ) ) {
			echo '<p><strong>' . wp_kses_post( $extras_element['title'] ) . '</strong></p>';
		}
		echo '<ul>';
		if ( isset( $extras_element ) && is_array( $extras_element ) && isset( $extras_element['feature_1'] ) && ! empty( $extras_element['feature_1'] ) ) {
			echo '<li>' . kadence()->get_icon( isset( $extras_element['feature_1_icon'] ) && ! empty( $extras_element['feature_1_icon'] ) ? $extras_element['feature_1_icon'] : 'shield_check' ) . ' ' . wp_kses_post( $extras_element['feature_1'] ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $extras_element ) && is_array( $extras_element ) && isset( $extras_element['feature_2'] ) && ! empty( $extras_element['feature_2'] ) ) {
			echo '<li>' . kadence()->get_icon( isset( $extras_element['feature_2_icon'] ) && ! empty( $extras_element['feature_2_icon'] ) ? $extras_element['feature_2_icon'] : 'shield_check' ) . ' ' . wp_kses_post( $extras_element['feature_2'] ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $extras_element ) && is_array( $extras_element ) && isset( $extras_element['feature_3'] ) && ! empty( $extras_element['feature_3'] ) ) {
			echo '<li>' . kadence()->get_icon( isset( $extras_element['feature_3_icon'] ) && ! empty( $extras_element['feature_3_icon'] ) ? $extras_element['feature_3_icon'] : 'shield_check' ) . ' ' . wp_kses_post( $extras_element['feature_3'] ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $extras_element ) && is_array( $extras_element ) && isset( $extras_element['feature_4'] ) && ! empty( $extras_element['feature_4'] ) ) {
			echo '<li>' . kadence()->get_icon( isset( $extras_element['feature_4_icon'] ) && ! empty( $extras_element['feature_4_icon'] ) ? $extras_element['feature_4_icon'] : 'shield_check' ) . ' ' . wp_kses_post( $extras_element['feature_4'] ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $extras_element ) && is_array( $extras_element ) && isset( $extras_element['feature_5'] ) && ! empty( $extras_element['feature_5'] ) ) {
			echo '<li>' . kadence()->get_icon( isset( $extras_element['feature_5_icon'] ) && ! empty( $extras_element['feature_5_icon'] ) ? $extras_element['feature_5_icon'] : 'shield_check' ) . ' ' . wp_kses_post( $extras_element['feature_5'] ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		echo '</ul>';
		echo '</div>';
	}
	/**
	 * Adds Product Payments just below the button.
	 */
	public function woocommerce_product_single_payments() {
		$payments_element = kadence()->option( 'product_content_element_payments' );
		$colors           = ( isset( $payments_element ) && is_array( $payments_element ) && isset( $payments_element['card_color'] ) && ! empty( $payments_element['card_color'] ) ? $payments_element['card_color'] : 'inherit' );
		echo '<fieldset class="single-product-payments payments-color-scheme-' . esc_attr( $colors ) . '">';
		if ( isset( $payments_element ) && is_array( $payments_element ) && isset( $payments_element['title'] ) && ! empty( $payments_element['title'] ) ) {
			echo '<legend>' . wp_kses_post( $payments_element['title'] ) . '</legend>';
		}
		echo '<ul>';
		if ( isset( $payments_element ) && is_array( $payments_element ) && isset( $payments_element['stripe'] ) && true === $payments_element['stripe'] ) {
			echo '<li class="single-product-payments-stripe">' . kadence()->get_icon( 'stripe' ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $payments_element ) && is_array( $payments_element ) && isset( $payments_element['visa'] ) && true === $payments_element['visa'] ) {
			echo '<li class="single-product-payments-visa">' . kadence()->get_icon( ( 'inherit' !== $colors ? 'visa_gray' : 'visa' ) ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $payments_element ) && is_array( $payments_element ) && isset( $payments_element['mastercard'] ) && true === $payments_element['mastercard'] ) {
			echo '<li class="single-product-payments-mastercard">' . kadence()->get_icon( ( 'inherit' !== $colors ? 'mastercard_gray' : 'mastercard' ) ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $payments_element ) && is_array( $payments_element ) && isset( $payments_element['amex'] ) && true === $payments_element['amex'] ) {
			echo '<li class="single-product-payments-amex">' . kadence()->get_icon( ( 'inherit' !== $colors ? 'amex_gray' : 'amex' ) ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $payments_element ) && is_array( $payments_element ) && isset( $payments_element['discover'] ) && true === $payments_element['discover'] ) {
			echo '<li class="single-product-payments-discover">' . kadence()->get_icon( ( 'inherit' !== $colors ? 'discover_gray' : 'discover' ) ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $payments_element ) && is_array( $payments_element ) && isset( $payments_element['paypal'] ) && true === $payments_element['paypal'] ) {
			echo '<li class="single-product-payments-paypal">' . kadence()->get_icon( ( 'inherit' !== $colors ? 'paypal_gray' : 'paypal' ) ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		if ( isset( $payments_element ) && is_array( $payments_element ) && isset( $payments_element['applepay'] ) && true === $payments_element['applepay'] ) {
			echo '<li class="single-product-payments-applepay">' . kadence()->get_icon( ( 'inherit' !== $colors ? 'applepay_gray' : 'applepay' ) ) . '</li>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
		echo '</ul>';
		echo '</fieldset>';
	}
	/**
	 * Removes filter to add svgs to add to cart link for product archives.
	 *
	 * @param string $html the html to end a loop.
	 * @return string $html the html to end a loop.
	 */
	public function remove_filter_for_add_to_cart_link( $html ) {
		remove_filter( 'woocommerce_loop_add_to_cart_link', array( $this, 'filter_add_to_cart_link_link' ), 10, 3 );
		return $html;
	}
	/**
	 * Adds filter to add svgs to add to cart link for product archives.
	 *
	 * @param string $html the html to start a loop.
	 * @return string $html the html to start a loop.
	 */
	public function add_filter_for_add_to_cart_link( $html ) {
		add_filter( 'woocommerce_loop_add_to_cart_link', array( $this, 'filter_add_to_cart_link_link' ), 9, 3 );
		return $html;
	}

	/**
	 * Adds custom classes to indicate the button size for the single products.
	 *
	 * @param array $classes Classes for the body element.
	 * @return array Filtered body classes.
	 */
	public function store_notice_body_classes( array $classes ) : array {
		if ( is_store_notice_showing() ) {
			$placement = kadence()->option( 'woo_store_notice_placement' );
			$classes[] = esc_attr( 'kadence-store-notice-placement-' . $placement );
			if ( 'above' === $placement ) {
				if ( kadence()->option( 'woo_store_notice_hide_dismiss' ) ) {
					add_filter( 'woocommerce_demo_store', array( $this, 'woocommerce_demo_store_remove_dismiss' ), 15, 2 );
				}
				remove_action( 'wp_footer', 'woocommerce_demo_store' );
				add_action( 'kadence_before_header', 'woocommerce_demo_store' );
			}
		}
		return $classes;
	}
	/**
	 * Filters woocommerce demo store to remove dismiss option.
	 *
	 * @param string $notice_html html for the notice.
	 * @param string $notice text for the notice.
	 * @return string new html for the notice.
	 */
	public function woocommerce_demo_store_remove_dismiss( $notice_html, $notice ) {
		$notice_id = md5( $notice );
		return '<p class="woocommerce-store-notice woo-static-store-notice demo_store" data-notice-id="' . esc_attr( $notice_id ) . '" style="display:block;">' . wp_kses_post( $notice ) . '</p>';
	}
	/**
	 * Adds custom classes to indicate whether a sidebar is present to the array of body classes.
	 *
	 * @param array $classes Classes for the body element.
	 * @return array Filtered body classes.
	 */
	public function my_account_body_classes( array $classes ) : array {
		if ( is_account_page() ) {
			$classes[] = 'kadence-account-nav-' . esc_attr( kadence()->option( 'woo_account_navigation_layout' ) );
		}
		return $classes;
	}
	/**
	 * Adds custom classes to indicate the button size for the single products.
	 *
	 * @param array $classes Classes for the body element.
	 * @return array Filtered body classes.
	 */
	public function single_product_body_classes( array $classes ) : array {
		if ( is_product() ) {
			$cart_element = kadence()->option( 'product_content_element_add_to_cart' );
			if ( isset( $cart_element ) && is_array( $cart_element ) && isset( $cart_element['button_size'] ) && ! empty( $cart_element['button_size'] ) ) {
				$size = $cart_element['button_size'];
			} else if ( kadence()->option( 'product_large_cart_button' ) ) {
				$size = 'large';
			} else {
				$size = 'normal';
			}
			$classes[] = 'kadence-cart-button-' . esc_attr( $size );
		}
		return $classes;
	}
	/**
	 * Refresh the cart for ajax adds.
	 *
	 * @param object $fragments the cart object.
	 */
	public function get_refreshed_fragments_number( $fragments ) {
		// Get cart items.
		ob_start();

		?><span class="header-cart-total"><?php echo wp_kses_post( WC()->cart->get_cart_contents_count() ); ?></span> 
		<?php

		$fragments['span.header-cart-total'] = ob_get_clean();

		return $fragments;

	}
	/**
	 * Refresh the cart for ajax adds.
	 *
	 * @param object $fragments the cart object.
	 */
	public function get_refreshed_fragments_mini( $fragments ) {
		// Get mini cart.
		ob_start();

		echo '<div class="kadence-mini-cart-refresh">';
		woocommerce_mini_cart();
		echo '</div>';
		$fragments['div.kadence-mini-cart-refresh'] = ob_get_clean();

		return $fragments;

	}
	/**
	 * Checks to see if theme needs to hook into cart fragments.
	 */
	public function check_for_fragment_support() {
		if ( $this->cart_in_header() ) {
			if ( kadence()->option( 'header_cart_show_total' ) ) {
				add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'get_refreshed_fragments_number' ) );
			}
			if ( 'slide' === kadence()->option( 'header_cart_style' ) || 'slide' === kadence()->option( 'header_mobile_cart_style' ) || 'dropdown' === kadence()->option( 'header_cart_style' ) ) {
				add_filter( 'woocommerce_add_to_cart_fragments', array( $this, 'get_refreshed_fragments_mini' ) );
			}
		}
	}
	/**
	 * Checks to see if theme needs to hook into cart fragments.
	 */
	public function cart_in_header() {
		if ( is_null( self::$cart_in_header ) ) {
			$in_header = false;
			$elements  = kadence()->option( 'header_desktop_items' );
			if ( isset( $elements ) && is_array( $elements ) ) {
				foreach ( array( 'top', 'main', 'bottom' ) as $row ) {
					if ( isset( $elements[ $row ] ) && is_array( $elements[ $row ] ) ) {
						foreach ( array( 'left', 'left_center', 'center', 'right_center', 'right' ) as $column ) {
							if ( isset( $elements[ $row ][ $row . '_' . $column ] ) && is_array( $elements[ $row ][  $row . '_' . $column ] ) ) {
								if ( in_array( 'cart', $elements[ $row ][  $row . '_' . $column ], true ) ) {
									$in_header = true;
									break;
								}
							}
						}
					}
				}
			}
			self::$cart_in_header = $in_header;
		}
		return self::$cart_in_header;
	}
	/**
	 * Enqueues a script for shop toggle.
	 */
	public function action_enqueue_scripts() {

		// If the AMP plugin is active, return early.
		if ( kadence()->is_amp() ) {
			return;
		}

		// Enqueue the slide script.
		wp_register_script(
			'kadence-shop-toggle',
			get_theme_file_uri( '/assets/js/shop-toggle.min.js' ),
			array(),
			KADENCE_VERSION,
			true
		);
		wp_script_add_data( 'kadence-shop-toggle', 'async', true );
		wp_script_add_data( 'kadence-shop-toggle', 'precache', true );
		wp_localize_script(
			'kadence-shop-toggle',
			'kadenceShopConfig',
			array(
				'siteSlug' => sanitize_title( get_bloginfo( 'name' ) ),
			)
		);
	}

	/**
	 * Print the notices on none woocommerce pages.
	 */
	public function wc_print_notices_none_woo() {
		if ( ! is_shop() && ! is_woocommerce() && ! is_cart() && ! is_checkout() && ! is_account_page() ) {
			echo '<div class="kadence-woo-messages-none-woo-pages woocommerce-notices-wrapper">';
			echo do_shortcode( '[woocommerce_messages]' );
			echo '</div>';
		}
	}
	/**
	 * Set Cross sells limit.
	 *
	 * @param string $limit the current product limit.
	 */
	public function cross_sell_limit( $limit ) {
		return 4;
	}
	/**
	 * Set Cross sells columns.
	 *
	 * @param string $columns the current column count.
	 */
	public function cross_sell_columns( $columns ) {
		return 4;
	}
	/**
	 * Insert the Cart summary title
	 */
	public function cart_summary_title() {
		echo '<div class="cart-summary"><h2>' . esc_html__( 'Cart Summary', 'kadence' ) . '</h2></div>';
	}
	/**
	 * Insert the Cart Form wrap.
	 */
	public function cart_form_wrap_before() {
		echo '<div class="kadence-woo-cart-form-wrap">';
	}
	/**
	 * Close the Cart Form wrap.
	 */
	public function cart_form_wrap_after() {
		echo '</div>';
	}
	/**
	 * Insert the myaccount navigation wrap.
	 */
	public function myaccount_nav_wrap_start() {
		echo '<div class="account-navigation-wrap">';
	}
	/**
	 * Close the myaccount navigation wrap.
	 */
	public function myaccount_nav_wrap_end() {
		echo '</div>';
	}
	/**
	 * Avatar for myaccount page.
	 */
	public function myaccount_nav_avatar() {
		$current_user = wp_get_current_user();
		if ( kadence()->option( 'woo_account_navigation_avatar' ) && 0 !== $current_user->ID ) {
			?>
			<div class="kadence-account-avatar">
				<div class="kadence-customer-image">
				<a class="kt-link-to-gravatar" href="https://gravatar.com/" target="_blank" rel="no" title="<?php echo esc_attr__( 'Update Profile Photo', 'kadence' ); ?>">
					<?php echo get_avatar( $current_user->ID, 60 ); ?>
				</a>
				</div>
				<div class="kadence-customer-name">
					<?php echo esc_html( $current_user->display_name ); ?>
				</div> 
			</div>
			<?php
		}
	}
	/**
	 * Output product loop wrapper.
	 *
	 * @param string $output the loop start.
	 */
	public function product_loop_start( $output ) {
		$columns = absint( wc_get_loop_prop( 'columns' ) );
		if ( 1 === $columns ) {
			if ( is_main_query() && is_archive() ) {
				$columns_class = 'content-wrap product-archive grid-cols grid-sm-col-1 grid-lg-col-1 products-list-view';
			} else {
				$columns_class = 'content-wrap product-archive grid-cols grid-sm-col-1 grid-lg-col-1';
			}
		} elseif ( 2 === $columns ) {
			$columns_class = 'content-wrap product-archive grid-cols grid-sm-col-2 grid-lg-col-2';
		} elseif ( 3 === $columns ) {
			$columns_class = 'content-wrap product-archive grid-cols grid-sm-col-2 grid-lg-col-3';
		} elseif ( 4 === $columns ) {
			$columns_class = 'content-wrap product-archive grid-cols grid-ss-col-2 grid-sm-col-3 grid-lg-col-4';
		} elseif ( 5 === $columns ) {
			$columns_class = 'content-wrap product-archive grid-cols grid-ss-col-2 grid-sm-col-3 grid-md-col-4 grid-lg-col-5';
		}
		$product_style = kadence()->option( 'product_archive_style' );
		$product_btn_style = kadence()->option( 'product_archive_button_style' );
		if ( is_main_query() && is_archive() ) {
			$attributes = $this->get_archive_infinite_attributes();
		} else {
			$attributes = '';
		}
		return '<ul class="products ' . esc_attr( $columns_class ) . ' woo-archive-' . esc_attr( $product_style ) . ' woo-archive-btn-' . esc_attr( $product_btn_style ) . '"' . ( $attributes ? " data-infinite-scroll='" . esc_attr( $attributes ) . "'" : '' ) . '>';

	}
	/**
	 * Get Archive infinite attributes
	 *
	 * @return string $attributes for the archive container.
	 */
	public function get_archive_infinite_attributes() {
		$attributes = '';
		return apply_filters( 'kadence_product_archive_infinite_attributes', $attributes );
	}
	/**
	 * Insert the opening anchor tag for products image in the loop.
	 */
	public function archive_loop_image_link_open() {
		global $product;

		$link = apply_filters( 'woocommerce_loop_product_link', get_the_permalink(), $product ); // phpcs:ignore WPThemeReview.CoreFunctionality.PrefixAllGlobals.NonPrefixedHooknameFound

		echo '<a href="' . esc_url( $link ) . '" class="woocommerce-loop-image-link woocommerce-LoopProduct-link woocommerce-loop-product__link">';
	}
	/**
	 * Insert the closing anchor tag for products image in the loop.
	 */
	public function archive_loop_image_link_close() {
		echo '</a>';
	}
	/**
	 * Insert the content wrap.
	 */
	public function archive_content_wrap_start() {
		echo '<div class="product-details content-bg entry-content-wrap">';
	}
	/**
	 * Close the content wrap.
	 */
	public function archive_content_wrap_end() {
		echo '</div>';
	}
	/**
	 * Show the product title in the product loop. By default this is an H2.
	 */
	public function archive_title_with_link() {
		global $product;

		$link = apply_filters( 'woocommerce_loop_product_link', get_the_permalink(), $product ); // phpcs:ignore WPThemeReview.CoreFunctionality.PrefixAllGlobals.NonPrefixedHooknameFound
		echo '<h2 class="' . esc_attr( apply_filters( 'woocommerce_product_loop_title_classes', 'woocommerce-loop-product__title' ) ) . '"><a href="' . esc_url( $link ) . '" class="woocommerce-LoopProduct-link-title woocommerce-loop-product__title_ink">' . get_the_title() . '</a></h2>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		// phpcs:ignore WPThemeReview.CoreFunctionality.PrefixAllGlobals.NonPrefixedHooknameFound
	}

	/**
	 * Show the product excerpt if single or if toggle is on, only for archives.
	 */
	public function archive_excerpt() {
		if ( is_main_query() && is_archive() ) {
			$columns = wc_get_loop_prop( 'columns' );
			if ( 1 === $columns || kadence()->option( 'product_archive_toggle' ) ) {
				global $post;
				echo '<div class="product-excerpt">';
				if ( $post->post_excerpt ) {
					echo wp_kses_post( apply_filters( 'archive_woocommerce_short_description', $post->post_excerpt ) ); // phpcs:ignore WPThemeReview.CoreFunctionality.PrefixAllGlobals.NonPrefixedHooknameFound
				} else {
					the_excerpt();
				}
				echo '</div>';
			}
		}
	}
	/**
	 * Wrap Action buttons.
	 */
	public function archive_action_wrap_start() {
		echo '<div class="product-action-wrap">';
	}
	/**
	 * Close Action buttons wrap.
	 */
	public function archive_action_wrap_end() {
		echo '</div>';
	}
	/**
	 * Adds Arrow to add to cart button.
	 *
	 * @param string $button Current classes.
	 * @param object $product Product object.
	 * @param array  $args The Product args.
	 */
	public function filter_add_to_cart_link_link( $button, $product, $args = array() ) {
		$product_btn_style = kadence()->option( 'product_archive_button_style' );
		if ( 'button' === $product_btn_style ) {
			$button = sprintf(
				'<a href="%s" data-quantity="%s" class="%s" %s>%s</a>',
				esc_url( $product->add_to_cart_url() ),
				esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
				esc_attr( isset( $args['class'] ) ? $args['class'] : 'button' ),
				isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
				esc_html( $product->add_to_cart_text() ) . ' ' . kadence()->get_icon( 'spinner' ) . ' ' . kadence()->get_icon( 'check' )
			);
		} else {
			$button = sprintf(
				'<a href="%s" data-quantity="%s" class="%s" %s>%s</a>',
				esc_url( $product->add_to_cart_url() ),
				esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
				esc_attr( isset( $args['class'] ) ? $args['class'] : 'button' ),
				isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
				esc_html( $product->add_to_cart_text() ) . ' ' . kadence()->get_icon( 'arrow-right-alt' ) . ' ' . kadence()->get_icon( 'spinner' ) . ' ' . kadence()->get_icon( 'check' )
			);
		}
		return $button;
	}
	/**
	 * Adds results count and catalog ordering.
	 *
	 * @param array        $classes Current classes.
	 * @param string|array $class Additional class.
	 * @param int          $post_id Post ID.
	 */
	public function add_woo_entry_classes( $classes, $class = '', $post_id = 0 ) {
		if ( ! $post_id || ! in_array( get_post_type( $post_id ), array( 'product', 'product_variation' ), true ) ) {
			return $classes;
		}
		$product = wc_get_product( $post_id );
		if ( ! $product ) {
			return $classes;
		}
		$classes[] = 'entry';
		$classes[] = 'content-bg';
		if ( is_singular() && is_main_query() && get_queried_object_id() === $post_id ) {
			$classes[] = 'entry-content-wrap';
		} else {
			$classes[] = 'loop-entry';
		}
		return $classes;
	}
	/**
	 * Adds results count and catalog ordering.
	 *
	 * @param array        $classes Current classes.
	 * @param string|array $class Additional class.
	 * @param int          $post_id Post ID.
	 */
	public function add_woo_cat_entry_classes( $classes, $class = '', $post_id = 0 ) {
		$classes[] = 'entry';
		$classes[] = 'content-bg';
		$classes[] = 'loop-entry';
		return $classes;
	}

	/**
	 * Adds results count and catalog ordering.
	 */
	public function archive_loop_top() {
		global $wp_query;
		if ( 0 === $wp_query->found_posts || ! woocommerce_products_will_display() ) {
			return;
		}
		if ( kadence()->option( 'product_archive_show_results_count' ) || kadence()->option( 'product_archive_show_order' ) || kadence()->option( 'product_archive_toggle' ) || apply_filters( 'kadence_product_archive_show_top_row', false ) ) {
			echo '<div class="kadence-shop-top-row">';
			do_action( 'kadence_woocommerce_before_shop_loop_top_row' );
			if ( kadence()->option( 'product_archive_show_results_count' ) ) {
				echo '<div class="kadence-shop-top-item kadence-woo-results-count">';
					woocommerce_result_count();
				echo '</div>';
			}
			if ( kadence()->option( 'product_archive_show_order' ) ) {
				echo '<div class="kadence-shop-top-item kadence-woo-ordering">';
					woocommerce_catalog_ordering();
				echo '</div>';
			}
			if ( kadence()->option( 'product_archive_toggle' ) ) {
				echo '<div class="kadence-shop-top-item kadence-woo-toggle">';
					$this->toggle_list();
				echo '</div>';
			}
			do_action( 'kadence_woocommerce_after_shop_loop_top_row' );
			echo '</div>';
		}
	}
	/**
	 * Adds toggle list option.
	 */
	public function toggle_list() {
		wp_enqueue_script( 'kadence-shop-toggle' );
		if ( 1 === wc_get_loop_prop( 'columns' ) ) {
			echo '<div class="kadence-product-toggle-container kadence-product-toggle-outer kadence-single-to-grid">';
				echo '<button title="' . esc_attr__( 'List View', 'kadence' ) . '" class="kadence-toggle-shop-layout kadence-toggle-list toggle-active" data-archive-toggle="list">';
					kadence()->print_icon( 'list', '', false );
				echo '</button>';
				echo '<button title="' . esc_attr__( 'Grid View', 'kadence' ) . '" class="kadence-toggle-shop-layout kadence-toggle-grid" data-archive-toggle="grid">';
					kadence()->print_icon( 'grid', '', false );
				echo '</button>';
			echo '</div>';
		} else {
			echo '<div class="kadence-product-toggle-container kadence-product-toggle-outer">';
				echo '<button title="' . esc_attr__( 'Grid View', 'kadence' ) . '" class="kadence-toggle-shop-layout kadence-toggle-grid toggle-active" data-archive-toggle="grid">';
					kadence()->print_icon( 'grid', '', false );
				echo '</button>';
				echo '<button title="' . esc_attr__( 'List View', 'kadence' ) . '" class="kadence-toggle-shop-layout kadence-toggle-list" data-archive-toggle="list">';
					kadence()->print_icon( 'list', '', false );
				echo '</button>';
			echo '</div>';
		}
	}
	/**
	 * Adds theme support for the Woocommerce plugin.
	 */
	public function action_add_woocommerce_support() {
		add_theme_support( 'woocommerce' );
		add_theme_support( 'wc-product-gallery-zoom' );
		add_theme_support( 'wc-product-gallery-slider' );
		add_theme_support( 'wc-product-gallery-lightbox' );

		add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );
	}
	/**
	 * Adds Breadcrumb for single products.
	 */
	public function output_product_above() {
		if ( is_product() && 'breadcrumbs' === kadence()->option( 'product_above_layout' ) ) {
			echo '<div class="product-title product-above">';
			get_template_part( 'template-parts/title/breadcrumb' );
			echo '</div>';
		}
	}
	/**
	 * Adds Title Area for single products.
	 */
	public function output_product_above_title() {
		if ( is_product() && 'title' === kadence()->option( 'product_above_layout' ) ) {
			get_template_part( 'template-parts/content/entry_hero' );
		}
	}
	/**
	 * Adds theme output Wrapper.
	 */
	public function output_content_wrapper() {
		kadence()->print_styles( 'kadence-content' );
		/**
		 * Hook for Hero Section
		 */
		do_action( 'kadence_hero_header' );
		echo '<div id="primary" class="content-area"><div class="content-container site-container"><main id="main" class="site-main" role="main">';
		if ( ! is_product() && kadence()->show_in_content_title() ) {
			get_template_part( 'template-parts/content/archive_header' );
		}
	}

	/**
	 * Adds theme end output Wrapper.
	 */
	public function output_content_wrapper_end() {
		echo '</main>';
		get_sidebar();
		echo '</div></div>';
	}
}
