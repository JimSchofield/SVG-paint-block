<?php
/**
 * Plugin Name: SVG Paint block
 * Description: A POC for an svg-based paint block
 * Version: 0.0.1
 * Author: Jim Schofield
 * Text Domain: svg-paint-block
 * Domain Path: /languages
 *
 * @package svg-paint-block
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
 
/**
 * Enqueue block JavaScript and CSS for the editor
 */
function svg_paint_block_plugin_editor_scripts() {
 
    // Enqueue block editor JS
    wp_enqueue_script(
        'svg-paint-block/editor-scripts',
        plugins_url( '/assets/dist/build.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
        filemtime( plugin_dir_path( __FILE__ ) . '/assets/dist/build.js' ) 
    );
 
    // Enqueue block editor styles
    // wp_enqueue_style(
    //     'my-block-editor-css',
    //     plugins_url( '/blocks/custom-block/editor-styles.css', __FILE__ ),
    //     [ 'wp-blocks' ],
    //     filemtime( plugin_dir_path( __FILE__ ) . 'blocks/custom-block/editor-styles.css' ) 
    // );
 
}

// Hook the enqueue functions into the editor
add_action( 'enqueue_block_editor_assets', 'svg_paint_block_plugin_editor_scripts' );