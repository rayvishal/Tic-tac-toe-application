import { useState } from "react"
function Square(props) {
    return <button onClick={props.onSquareClick} className="square">{props.value}</button>
}


export default function Board() {
    const [xisNext, setXIsNext] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null))
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xisNext) {
            nextSquares[i] = "X"
        } else {
            nextSquares[i] = "0"
        }

        setSquares(nextSquares)
        setXIsNext(!xisNext)


    }
    const winner = calculateWinner(squares);
    let statuss;
    if (winner) {
        statuss = 'Winner:' + winner
    } else {
        statuss = 'Next player:' + (xisNext ? "X" : "0")
    }



    return (<>
        <div className="statuss">{statuss}</div>
        <div className="board-row">
            <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
            <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
            <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
        </div>
        <div className="board-row">
            <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
            <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
            <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
        </div>
        <div className="board-row">
            <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
            <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
            <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
        </div>
    </>)
}
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null


}
