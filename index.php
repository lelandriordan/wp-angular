<?php
/**
 * The Main Template File
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?> ng-app="app">

    <nav class="app-navbar navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
        </div>
      </div>
    </nav>

    <div class="app-content container-fluid" ui-view=""></div>

    <footer class="app-footer">
      <p><a href="<?php echo esc_url( 'https://github.com/lelandriordan/wp-angular'); ?>">WP Angular</a> by <a href="<?php echo esc_url( 'http://lelandriordan.com' ); ?>">Leland Riordan</a></p>
    </footer>

  <?php wp_footer(); ?>
</body>
</html>
