<?php
/**
 * Enqueue scripts and styles.
 */
function wpa_scripts() {
  /**
   * Stylesheets
   */
  wp_enqueue_style( 'wpa-style', get_stylesheet_uri() );
  wp_enqueue_style( 'wpa-bootstrap4', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', array(), 'v4alpha2' );
  wp_enqueue_style( 'wpa-app', get_template_directory_uri() . '/dist/css/app.css', array(), '0.1.0' );

  /**
   * JavaScripts
   */
  wp_enqueue_script( 'wpa-angularjs', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js', array(), '1.5.0', true);
  wp_enqueue_script( 'wpa-angular-route', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-route.js', array('wpa-angularjs'), '1.5.0', true);
  wp_enqueue_script( 'wpa-angular-resource', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-resource.js', array('wpa-angularjs'), '1.5.0', true);

  wp_enqueue_script( 'wpa-ui-router', 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.js', array('wpa-angularjs'), '0.2.18', true);

  // Development
  wp_enqueue_script( 'wpa-app', get_template_directory_uri() . '/dist/js/app.js', array('wpa-angularjs', 'wpa-ui-router', 'wpa-angular-route', 'wpa-angular-resource'), '0.1.4', true );
  // Production - Minified
  // wp_enqueue_script( 'wpa-app', get_template_directory_uri() . '/dist/js/app.min.js', array('wpa-angularjs', 'wpa-ui-router'), '0.1.0', true );

  wp_localize_script( 'wpa-app', 'wpaInfo',
    array(
      //'api' => get_bloginfo( 'wpurl' ) . '/wp-json/posts',
      'api'	=> rest_get_url_prefix() . '/wp/v2/',
      'site_url' => get_site_url(),
      'template_directory' => get_template_directory_uri() . '/',
      // 'nonce' => wp_create_nonce( 'wp_rest' ),
      'is_admin' => current_user_can('administrator')
    )
  );

}
add_action( 'wp_enqueue_scripts', 'wpa_scripts' );
