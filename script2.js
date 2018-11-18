function Timer() {
    function addZero(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }

    var dataTeraz = new Date();
    var godzina = addZero(dataTeraz.getHours());
    var minuta = addZero(dataTeraz.getMinutes());
    var sekunda = addZero(dataTeraz.getSeconds());

    var godzStr = godzina.toString();
    var minStr = minuta.toString();
    var sekStr = sekunda.toString();

    document.getElementById('godz0').innerHTML = godzStr[0];
    document.getElementById('godz1').innerHTML = godzStr[1];
    document.getElementById('min0').innerHTML = minStr[0];
    document.getElementById('min1').innerHTML = minStr[1];
    document.getElementById('sek0').innerHTML = sekStr[0];
    document.getElementById('sek1').innerHTML = sekStr[1];
}

var myVar = setInterval(Timer, 1000);
Timer()
