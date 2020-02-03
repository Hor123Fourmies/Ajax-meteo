<?php

// Vérification que l'extension curl est bien activée (si surligné, activation ok):

//phpinfo();
if(isset($_GET['ville']) && !empty($_GET['ville'])) {
    $input = $_GET['ville'];

    $url = "http://api.openweathermap.org/data/2.5/weather?q=" . $input . "&units=metric&APPID=424498922b6222b4490bcd04c5ffb79d";
    //print_r($url);

    //var_dump($input);

    $ch = curl_init();

    // configuration des options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, 0);

    // exécution de la session
    curl_exec($ch);

    // fermeture des ressources
    curl_close($ch);


    json_encode($ch);


    /*
    {"coord":{"lon":2.35,"lat":48.85},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":6.57,"feels_like":2.56,"temp_min":5.56,"temp_max":7.22,"pressure":1011,"humidity":100},"visibility":4300,"wind":{"speed":4.6,"deg":170},"clouds":{"all":100},"dt":1580377054,"sys":{"type":1,"id":6550,"country":"FR","sunrise":1580369056,"sunset":1580402587},"timezone":3600,"id":2988507,"name":"Paris","cod":200}
    */
}