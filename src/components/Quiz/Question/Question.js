import React from 'react';
import QOptions from './QOptions';
import './Question.css'

const Question = ({ ques,handleClick,id }) => {
    const { options, question } = ques;
    // console.log(id);

    

    return (
        <div className='d-flex justify-content-center'>
            <div className='question text-start my-3 p-3'>
                {`${question}`}
                <br />
                <div className="d-flex my-2 flex-wrap">
                    {
                        options.map(number => <QOptions key={Math.random()} handleClick={handleClick} id={id} number={number}></QOptions>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;