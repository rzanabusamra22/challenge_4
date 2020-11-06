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
function horizontalWinCheck() {
    for (var row = 0; row < 6; row++) {
        for (var col = 0; col < 4; col++) {
            if (colorMatchCheck(returnColor(row, col), returnColor(row, col + 1), returnColor(row, col + 2), returnColor(row, col + 3))) {
                console.log('Horizontal Win');
                reportwin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}
function verticalWinCheck() {
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 3; row++) {
            if (colorMatchCheck(returnColor(row, col), returnColor(row + 1, col), returnColor(row + 2, col), returnColor(row + 3, col))) {
                console.log('Vertical Win');
                reportwin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}
function diagonalWinCheck() {
    for (var col = 0; col < 5; col++) {
        for (var row = 0; row < 7; row++) {
            if (colorMatchCheck(returnColor(row, col), returnColor(row + 1, col + 1), returnColor(row + 2, col + 2), returnColor(row + 3, col + 3))) {
                console.log('Diagonal Win');
                reportwin(row, col);
                return true;
            } else if (colorMatchCheck(returnColor(row, col), returnColor(row - 1, col + 1), returnColor(row - 2, col + 2), returnColor(row - 3, col + 3))) {
                console.log('Diagonal Win');
                reportwin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$('h3').text(player1 + " it is your turn, pick a column to drop in!")

$('.board button').on('click', function () {
    var col = $(this).closest('td').index();
    var bottomAvail = checkBottom(col);
    changeColor(bottomAvail, col, currentColor);
    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
        $('h1').text(currentName + " You have Won!")
        //console.log(currentName+" You have Won!")
        $('h3').fadeOut(20);
        game_on = false;
    }
    currentPlayer = currentPlayer * -1;
    if (currentPlayer === 1) {
        currentName = player1;
        $('h3').text(currentName + " it is your turn, pick a column to drop in!")
        currentColor = player1Color;
    } else {
        currentName = player2;
        $('h3').text(currentName + " it is your turn, pick a column to drop in!")
        currentColor = player2Color;
    }
    if (game_on === false) {
        $('h2').text("Refresh the page to Play Again!")
    }
})
function replay() {
    location.reload()
}