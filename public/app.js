document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.board div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#Current-player')
    let currentPlayer = 1;

    for (var i = 0; i < squares.length; i++) {
        (function (index) {
            squares[i].onClick = function () {
                //if taken go top of it 
                if (squares[index + 7].classList.contains('taken')) {
                    if (currentPlayer === 1) {
                        squares[index].classList.add('taken')
                        squares[index].classList.add('player-one')
                        //change the player
                    }

                }
            }
        })
    }
})