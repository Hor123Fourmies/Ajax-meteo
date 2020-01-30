<?php


if(isset($_GET['ville']) &!empty($_GET['ville'])) {
    $input = $_GET['ville'];

    $url2= "https://tile.openweathermap.org/map/temp_new/.$input.png?appid=424498922b6222b4490bcd04c5ffb79d";

    $ch = curl_init();

    // configuration des options
    curl_setopt($ch, CURLOPT_URL, $url2);
    curl_setopt($ch, CURLOPT_HEADER, 0);

    // exécution de la session
    curl_exec($ch);

    // fermeture des ressources
    curl_close($ch);

    json_encode($ch);
}
