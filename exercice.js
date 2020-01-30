function valider() {

    var input = document.getElementById('ville').value;

    var date = new Date();

    function NomDuJour (date)
    {
        switch (date.getDay())
        {
            case 1 : return "lundi"
                break
            case 2 : return "mardi"
                break
            case 3 : return "mercredi"
                break
            case 4 : return "jeudi"
                break
            case 5 : return "vendredi"
                break
            case 6 : return "samedi"
                break
            case 7 : return "dimanche"
                break
        } // Fin du switch
    } // Fin de la fonction NomDuJour

// Renvoie le nom du mois en toutes lettres en français :
    function NomDuMois (date)
    {
        switch (date.getMonth())
        {
            case 0 : return ("janvier")
                break
            case 1 : return ("février")
                break
            case 2 : return ("mars")
                break
            case 3 : return ("avril")
                break
            case 4 : return ("mai")
                break
            case 5 : return ("juin")
                break
            case 6 : return ("juillet")
                break
            case 7 : return ("août")
                break
            case 8 : return ("septembre")
                break
            case 9 : return ("octobre")
                break
            case 10: return ("novembre")
                break
            case 11: return ("décembre")
                break
        } // Fin du switch
    } // Fin de la fonction NomDuMois

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
            var json = JSON.parse(this.responseText);
            document.getElementById('date').innerHTML = NomDuJour (date)+" " + date.getDay()+" " +(NomDuMois (date))+" "+date.getFullYear();
            document.getElementById('temperatureActuelle').innerHTML = Math.round(json.main.temp) + "°C";
            document.getElementById('long').innerHTML ="Longitude : " + json.coord.lon;
            document.getElementById('lat').innerHTML ="Latitude : " + json.coord.lat;
            document.getElementById('tempMax').innerHTML ="Température max : "+ Math.round(json.main.temp_max) + "°C";
            document.getElementById('tempMin').innerHTML ="Température min : " + Math.round(json.main.temp_min) + "°C";
            document.getElementById('pressAtm').innerHTML ="Pression atmosphérique : " + json.main.pressure + " Pa";
            document.getElementById('vitVent').innerHTML ="Vitesse du vent : " + json.wind.speed + " km/h";
            document.getElementById('humidite').innerHTML ="Humidité : " + json.main.humidity+ " %";
        }
    };


    xhttp.open("GET", "script.php?ville="+input, true);

    xhttp.send();


}


document.getElementById('boutonValider').addEventListener('click', valider);



