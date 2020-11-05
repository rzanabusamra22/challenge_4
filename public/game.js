var player1 = prompt("Player One: Enter Your Name");
console.log("Player One is :- " + player1)
var player1Color = 'rgb(255,255,0)';
var player2 = prompt("Player Two: Enter Your Name");
console.log("Player Two is :- " + player2)
var player2Color = 'rgb(173,255,47)';
var game_on = true;
var table = $('table tr');

function reportwin(rowNum, colNum) {
    console.log(currentName + " You won starting at this row,col :- (" + (rowNum + 1) + "," + (colNum + 1) + ")");
}

function changeColor(rowIndex, colIndex, color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function returnColor(rowIndex, colIndex, color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}
function checkBottom(colIndex) {
    var colorReport = returnColor(5, colIndex)
    for (var row = 5; row > -1; row--) {
        colorReport = returnColor(row, colIndex);
        if (colorReport === 'rgb(128, 128, 128)') {
            return row
        }
    }
}
function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}

function replay() {
    location.reload()
}