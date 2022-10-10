import React from 'react';
import './QOption.css'

const QOptions = ({ number, handleClick, id }) => {
    // console.log(number, id);
    return (
        <div className='p-2 my-2'>
            <div id={id} onClick={(e) => handleClick(number, id, e)} className={`border p-2 quesOption text-muted`}>
                {number}
            </div>
        </div>
    );
};

export default QOptions;