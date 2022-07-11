<?php

require 'vendor/autoload.php';

// Routing
$page = 'home';
if (isset($_GET['p'])) {
    $page = $_GET['p'];
}

// Load page

$loader = new Twig_Loader_Filesystem(__DIR__ . 'templates/');
$twig = new Twig_Environment($loader, [
    'cache' => false, // __DIR__ . 'web/cache',
]);

if ($page == 'head') {
    echo $twig->render('head.html.twig');
}

?>