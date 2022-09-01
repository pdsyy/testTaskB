import React from 'react';
import "../App.css"
const HoveredBlocks = ({array, value}) => {
    return (
        <div>
            {array.map((p, number) => <div key={number} className = "col_row">row {Math.ceil((p+1)/value).toFixed(0)} col {p%value+1}</div>)}
        </div>
    );
};

export default HoveredBlocks;