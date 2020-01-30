function valider() {

    var input = document.getElementById('ville').value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
            //document.getElementById('carte').innerHTML = ;

        }
    };


    xhttp.open("GET", "script2.php?ville="+input, true);

    xhttp.send();


}


document.getElementById('boutonValider').addEventListener('click', valider);



