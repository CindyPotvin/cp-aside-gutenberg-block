<?php
/**
 * Plugin Name: Aside Guterberg block
 * Author: Cindy Potvin
 * Version: 1.0.0
 * Description: A Gutenberg block for the <aside> HTML tag.
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
