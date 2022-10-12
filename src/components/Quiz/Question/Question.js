import React from 'react';
import QOptions from './QOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './Question.css'

const Question = ({ ques, handleClick, id, handleEyeBtn }) => {
    const { options, question } = ques;



    return (
        <div className='d-flex justify-content-center'>
            <div className='question text-start my-3 p-3'>
                <div className='d-flex justify-content-between'>
                    {`${question}`}
                    <FontAwesomeIcon className='ms-auto' icon={faEye} onClick={() => handleEyeBtn(id)} />
                </div>
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