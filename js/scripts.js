//暫存區
var tempNum = 0;
var numFun = "";


function numOput($num) {
    if (document.getElementById('result').value == 0) {
        document.getElementById('result').value = $num;
    } else {
        document.getElementById('result').value += $num;
    }
}

function numFunSet($fun) {
    numFun = $fun;
    console.log('numFum:' + numFun);
    return numFun;
}

function temp() {
    tempNum = document.getElementById('result').value;
    document.getElementById('result').value = 0;

    console.log("tempNum:" + tempNum);

    return tempNum;

}


function numReSet() {
    document.getElementById('result').value = 0;
    tempNum = 0;
}


function result() {
    var resultNum = document.getElementById('result').value;
    switch (numFun) {
        case '+':
            document.getElementById('result').value = parseFloat(tempNum) + parseFloat(resultNum);
            break;
        case '-':
            document.getElementById('result').value = parseFloat(tempNum) - parseFloat(resultNum);
            break;
        case '*':
            document.getElementById('result').value = parseFloat(tempNum) * parseFloat(resultNum);
            break;
        case '/':
            document.getElementById('result').value = parseFloat(tempNum) / parseFloat(resultNum);
            break;
    }

}
