import Square from "./Square";
import Knight from "./Knight";
import BoardSquare from './BoardSquare'
import { canMoveKnight, moveKnight } from "./Game";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const handleSquareClick = (toX, toY) => {
    if(canMoveKnight(toX, toY)){
        moveKnight(toX, toY);
    }
};

const renderPiece = (x, y, [knightX, knightY]) => {
    if(x === knightX && y === knightY){
        return <Knight />
    }
}

const renderSquare = (i, knightPosition) => {
    const x = i % 8;
    const y = Math.floor( i / 8 );
    return (
        <div key={i} style={{width : '12.5%', height : '12.5%'}}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div>
    )
};

const Board = ({knightPosition}) => {
    const squares=[];
    for (let i = 0; i < 64 ; i ++){
        squares.push(renderSquare(i, knightPosition))
    }
    return (
        <DndProvider backend={HTML5Backend}>
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
        </DndProvider>
      )
}

export default Board;