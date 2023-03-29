
//Zadanie 6.2 - Problem ze wzorem - za duże wyniki
function obliczRaty() {
    //Pobranie danych
    let kwotaPozyczki = parseInt(document.getElementById('kwotaObliczen').value);
    let ileRat = parseInt(document.getElementById('liczbaRat').value);
    let procentRocznie = document.getElementById('procent').value;

    //Obliczenia
    let procentMiesiecznie = procentRocznie / 1200;
    let rataWynik = (kwotaPozyczki * procentMiesiecznie) / (1 - (1 / (1 + procentMiesiecznie)**ileRat));

    //Pobranie pól wynikowych
    let rataMiesieczna = document.getElementById('rataMiesieczna');
    let kwotaZOdsetkami = document.getElementById('kwotaZOdsetkami');

    rataMiesieczna.value = rataWynik.toFixed(2);
    kwotaZOdsetkami.value = Math.ceil(rataWynik * ileRat*100)/100;

    //Wyświetlenie błędu
    // if (isNaN(rataWynik) || isFinite(rataWynik)) {
    //     alert("Wprowadzono błędne dane!");
    //     rataMiesieczna.value = 0;
    //     kwotaZOdsetkami.value = 0;
}

//Zadanie 6.3
function obliczWynik(){
    var tab = document.getElementsByName("dzialanie");
    var op;
    for(let i=0;i<tab.length;i++){
        if(tab[i].checked) op = tab[i].value;
    }

    let varX = parseFloat(document.getElementById('varX').value);
    let varY = parseFloat(document.getElementById('varY').value);
    let wynikKalkulatora = document.getElementById('wynikKalkulatora');
    switch (op){
        case '+':
            wynikKalkulatora.value= varX + varY;
            break;
        case '-':
            wynikKalkulatora.value = varX - varY;
            break;
        case '*':
            wynikKalkulatora.value = varX * varY;
            break;
        case '/':
            if (varY === 0) {
                alert("Błędne dane!");
                wynikKalkulatora.value = 0;
                break;
            } else {
                wynikKalkulatora.value = varX / varY;
                break;
            }
    }
}




