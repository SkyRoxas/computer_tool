function numOput($num) {
    if (document.getElementById('result').value == 0) {
        document.getElementById('result').value = $num;
    } else {
        document.getElementById('result').value += $num;
    }
}

function numReSet() {
    document.getElementById('result').value = 0;
}

function temp() {
    var temp = document.getElementById('result').value;
    document.getElementById('result').value = 0;

    console.log("temp:" + temp);

    return temp;

}
