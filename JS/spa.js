
function pokaz(id) {
    let tresc = "";
    switch (id) {
        case 2: tresc += pokazGalerie();break;
        case 3: tresc += pokazPost(); break;
        case 4: tresc += pokazKontakt();break;
        default: tresc += pokazO();
    }
    document.getElementById('blok').innerHTML = tresc;
}

function pokazO(){
    let tresc = '<h2><br>Pierwsze kroki</h2> ';
    tresc += '<p> W aplikacjach typu SPA ......</p>'+
    '<p class="srodek"><img src="./images/Banner-Spa.jpeg" alt="Zdjęcie"></p>' +
        '<article><h2>Wady SPA</h2><p>' +
    ' Czas wytworzenia oraz nakład pracy ... </p></article>';
    return tresc;
}

function pokazGalerie() {
    let tresc = '<h2><BR>Moja galeria</h2>';
    tresc+=' <div class="galeria">';
    for(let i=1;i<=10;i++) {
        let pathForImg = './images/G_miniaturki/obraz' + i + '.JPG';
        let altForGalleryImg = 'zdj' + i;
        tresc+='<div class="slajd"><img src="' + pathForImg + '" alt="' + altForGalleryImg + '">' + '</div>';
    }
    return tresc + '</div>';
}

function pokazKontakt() {
    let tresc='<h2><br>Kontakt</h2>';
    tresc += '<div id="contactElement"><H3>Bartosz Skowyra</H3><p>Tel. 123 456 789</p><p>Numer indeksu: 97736</p><p>Politechnika Lubelska</p></div>'
    return tresc;
}

function pokazPost() {
    let tresc = '<h2><br />Dodaj post</h2>';
    //Zminiony adres email!!!
    tresc+='<article class="srodek" ><form action="mailto:b.panczyk@pl.pl" method="post" onsubmit="return pokazDane();">'+
        'Twój email:<br> <input type="email" name="email" id="email" required><br>'+
        'Nazwisko i imie: <br><input type="text" name="name" id="name" required><br>'+
        'Telefon:<br> <input type="number" name="phoneNumber" id="phoneNumber" pattern="[0-9]{9}$" required><br>'+
        'Zainteresowania:<br> <input type="checkbox" name="hobby" id="hobbyCheckboxSport" value="Sport">' +
        '<label for="hobbyCheckboxSport">Sport</label>' +
        '<input type="checkbox" name="hobby" id="hobbyCheckboxMusic" value="Muzyka">' +
        '<label for="hobbyCheckboxMusic">Muzyka</label>' +
        '<input type="checkbox" name="hobby" id="hobbyCheckboxMovie" value="Film">' +
        '<label for="hobbyCheckboxMovie">Film</label>' +
        '<input type="checkbox" name="hobby" id="hobbyCheckboxOther" value="Inne">' +
        '<label for="hobbyCheckboxOther">Inne</label><br>' +
        'Wiek: <BR><label>' +
        '<input type="radio" name="ageField" value="<10"> Mniej niż 10</label>' +
        '<label><input type="radio" name="ageField" value="10-21"> 10-20 </label>'+
        '<label><input type="radio" name="ageField" value="21-30"> 21-30 </label>' +
        '<label><input type="radio" name="ageField" value="31-40"> 31-40 </label>' +
        '<label><input type="radio" name="ageField" value="41-50"> 41-50 </label>' +
        '<label><input type="radio" name="ageField" value=">50"> Więcej niż 50</label><BR>' +
        'Komentarz: <br><textarea rows="3" cols="20" id="wiadomosc" name="wiadomosc" required></textarea>'+
        '<br> <input type="submit" name="wyslij" value="Wyślij" />'+
        '</form></article>';
    return tresc;
}
function pokazDane() {

    let dane="Następujące dane zostaną wysłane:\n";
    let tableOfCheckboxes = document.getElementsByName('hobby');
    let tableOfChecked = [];
    for(let i = 0; i < tableOfCheckboxes.length; i++) {
        if (tableOfCheckboxes[i].checked) {
            tableOfChecked.push(tableOfCheckboxes[i].value);
        }
    }

    dane += "Email: "+document.getElementById('email').value + "\nNazwisko i imię: " +
        document.getElementById('name').value + "\nTelefon: " +
        document.getElementById('phoneNumber').value + "\nZainteresowania " +
        tableOfChecked;

    let tabOfAge = document.getElementsByName('ageField');
    for(let i = 0; i<tabOfAge.length; i++){
        if (tabOfAge[i].checked) {
            dane += "\nWiek " + tabOfAge[i].value;
        }
    }

    dane += "\nWiadomość: " +
        document.getElementById('wiadomosc').value;
    return window.confirm(dane);
}


