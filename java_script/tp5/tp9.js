function seconnecter(){
    var login = prompt("Veuillez saisir votre identifiant de connexion :");
    var password = prompt("Entrer votre mot de passe :");
    if (login == "admin" && password == "admin"){
        document.write("Bienvenue : "   +login);
    }
    else{
        alert("Acce refuse");
    }
}

function seconnecter2(){
    var login = prompt("Veuillez saisir votre identifiant de connexion :");
    var password = prompt("Entrer votre mot de passe :");
    if (login == "admin" && password == "admin"){
        document.write("Bienvenue : "   +login);
    }
    else{
        alert("Acce refuse");
    }
}

function seconnecter2(){
    window.location.href='id.html'
}

function login(){
    var login = document.getElementById("t1").value;
    var password = document.getElementById("h1").value;

    if (login == "admin" && password == "admin"){
        window.location.href='reussi.html'
    }
    else{
        window.location.href='non.html'
    }
}

function affichagetab(){
    document.write('<table border=2px width=30%');
    for(let i = 0; i<=5; i++){
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function affichagetab2(){
    document.write('<table border=2px width=30%');
    var x = prompt("Veuillez saisir le nombre de lignes");
    for(let i = 1; i<=x; i++){
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function swich() {
    var color = prompt ("Entrez une couleur");
    switch(color)
    { 
        case "rouge": document.body.style.background = "red";
        break;
        case "rouge": document.body.style.background = "red";
        break;
        case "bleu" : document.body.style.background = "blue";
        break;
        case "BLEU": document.body.style.background = "blue";
        break;
        case "vert": document. body.style.background = "green";
        break;
        case "VERT" : document.body.style.background = "green"
        break;
        default: alert ("couleur non definie");

    }

}

function cdc() {
    var chaine = prompt ("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("la chaine contient " + chaine. length+" caractères  " + "<br>");
    document.write("la première lettre est" + chaine.substr (0,1)+ "<br>") ;

}

function seconnecter3(){
    var i = 0;
    do{
    var login=prompt("Donner votre nom d'utilisateur");
    var password= prompt("Entrer votre mot de passe");
    if(login=="admin" && password=="admin"){
        document.write('Bienvenu:' +login);
        break;
    }
    else{
        alert("Accès refusé");
        i+=1;
    }}
    while(i<3);
    alert("Délai dépassé");
}

function ajouterLigne() { 
    window.location.href="tableau.html";
}










     
