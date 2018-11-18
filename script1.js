console.log('Zadanie nr 1');

function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

var dataTeraz = new Date();
var dzien = dataTeraz.getDate();
var miesiac = addZero(dataTeraz.getMonth());
var rok = dataTeraz.getFullYear();
var godzina = dataTeraz.getHours();
var minuta = addZero(dataTeraz.getMinutes());

console.log('Hello! Today is ' + dzien + '.' + miesiac + '.' + rok + ' ' + godzina + ':' + minuta);

document.getElementById('hello').innerHTML = 'Hello! Today is ' + dzien + '.' + miesiac + '.' + rok + ' ' + godzina + ':' + minuta;

console.log('---');
console.log('Zadanie nr 2');

var array = [1,14,15,-31,5,6,129,9,-21,55];
var maxNum = array[0];
var minNum = array[0];

for (i = 0; i < array.length; i++) {
    if (maxNum < array[i] ) {
        maxNum = array[i];
    } 
    if (minNum > array[i]) {
        minNum = array[i];
    }
}

console.log('Największa liczba w zbiorze to ' + maxNum);
console.log('Najmniejsza liczba w zbiorze to ' + minNum);

// console.log('---');
// console.log('Zadanie nr 3');



function checkPesel() {
    var pesel = prompt('Witaj, podaj swój numer PESEL', '');
    if  (pesel.length != 11 ) {
        document.getElementById('zad3').innerHTML = 'Podałeś nieprawidłowy numer PESEL!';
    } else {
        document.getElementById('zad3').innerHTML = 'Numer PESEL ma prawidłową ilość znaków';
    }
}
