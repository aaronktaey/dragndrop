const Square = ({black, children}) => {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    return (
        <div 
            style={{ 
                width : '100%',
                height : '100%',
                backgroundColor : fill,
                color : stroke,
                borderWidth: '1px',
                borderStyle: 'solid',
                margin: '1px',
            }}
        >
            {children}
        </div>
    )
}

export default Square;