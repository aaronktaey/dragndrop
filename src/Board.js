import Square from "./Square";
import Knight from "./Knight";
import { canMoveKnight, moveKnight } from "./Game";

const handleSquareClick = (toX, toY) => {
    if(canMoveKnight(toX, toY)){
        moveKnight(toX, toY);
    }
};

const renderSquare = (i, [knightX, knightY]) => {
    const x = i % 8;
    const y = Math.floor( i / 8 );
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight/> : null;

    return (
        <div key={i} style={{width : '12.5%', height : '12.5%'}} onClick={()=>{handleSquareClick(x,y)}}>
            <Square black={black}>{piece}</Square>
        </div>
    )
};

const Board = ({knightPosition}) => {
    const squares=[];
    for (let i = 0; i < 64 ; i ++){
        squares.push(renderSquare(i, knightPosition))
    }
    return (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {squares}
        </div>
      )
}

export default Board;