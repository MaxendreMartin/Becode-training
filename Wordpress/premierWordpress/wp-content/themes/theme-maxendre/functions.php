<?php

function maxendre_supports()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');
    register_nav_menu('header', 'En tête du menu');
    register_nav_menu('footer', 'Pied de page');
}

function maxendre_register_assets()
{
    wp_register_style('bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css', []);
    wp_register_script('bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js', ['popper', 'jquery'], false, true);
    wp_register_script('popper', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js', [], false, true);
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://code.jquery.com/jquery-3.5.1.slim.min.js', [], false, true);
    wp_enqueue_style('bootstrap');
    wp_enqueue_script('bootstrap');
}

function maxendre_separator()
{
    return '|';
}

function maxendre_menu_class($classes)
{
    $classes[] = 'nav-item';
    return $classes;
}

function maxendre_menu_link_class($attrs)
{
    $attrs['class'] = 'nav-link';
    return $attrs;
}

function maxendre_pagination()
{
    $pages = paginate_links(['type' => 'array']);
    if ($pages === null) {
        return;
    }
    echo '<nav aria-label="Pagination" class="my-4">';
    echo '<ul class="pagination">';
    foreach ($pages as $page) {
        $active = strpos($page, 'current') !== false;
        $class = 'page-item';
        if ($active) {
            $class .= 'active';
        }
        echo '<li class="' . $class . '">';
        echo str_replace('page-numbers', 'page-link', $page);
        echo '</li>';
    }
    echo '</ul>';
    echo '</nav>';
}

function maxendre_init()
{
    register_taxonomy('music', 'post', [
        'labels' => [
            'name' => "Music",
            'search_items' => "Rechercher des styles de musiques",
            'all_items' => "Tous les styles de musique",
            'edit_item' => "Editer le style de musique",
            'update_item' => "Mettre à jour le style de musique",
            'add_new_item' => "Ajouter un genre de musique",
            'menu_name' => "Music",
        ],
        'show_in_rest' => true,
        'hierarchical' => true,
        'show_admin_column' => true,
    ]);
}

add_action('init', 'maxendre_init');
add_action('after_setup_theme', 'maxendre_supports');
add_action('wp_enqueue_scripts', 'maxendre_register_assets');
add_filter('document_title_separator', 'maxendre_separator');
add_filter('nav_menu_css_class', 'maxendre_menu_class');
add_filter('nav_menu_link_attributes', 'maxendre_menu_link_class');
