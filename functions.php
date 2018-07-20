<?php 

function learningWordPress_resources(){
 

    wp_enqueue_script( 'script-name', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true );
  
    wp_enqueue_style('style', get_stylesheet_uri());





}

add_action('wp_enqueue_scripts', 'learningWordPress_resources');

function learningWordPress_setup(){
    //Add featured image support
    add_theme_support('post-thumbnails');
    

    //Navigation Menus

    register_nav_menus(array(
        'primary' => __( 'Primary Menu'),
        'footer' => __( 'Footer Menu'),
    ));    
    
    //Add Post Format Support
    add_theme_support('post-formats', array('aside', 'gallery', 'link', 'image'));
}

add_action('after_setup_theme', 'learningWordPress_setup');

//Customize excerpt word count
function custom_excerpt_length(){
    return 25;
}
add_filter('excerpt_length', 'custom_excerpt_length');

function filter_ptags_on_images($content){
   return preg_replace('/<p>\s*(<a .*>)?\s*(<img .* \/>)\s*(<\/a>)?\s*<\/p>/iU', '\1\2\3', $content);
}

add_filter('the_content', 'filter_ptags_on_images');

function child_widget_init(){
    register_sidebar( array (
        'name' => 'New Widget Area',
        'id' => 'new_widget_area',
        'before_widget' => '<div class="blog-widget">',
        'after_widget' => '</div>',
        'before_title' => '<p>',
        'after_title' => '</p>',
    ));
}
add_action( 'widgets_init', 'child_widget_init');