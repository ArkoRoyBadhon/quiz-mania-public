import React from 'react';
import './Card.css'

const Card = ({ topic, handleSelect }) => {
    const { id, name, logo } = topic;
    return (
        <div className='col-12 col-md-4'>
            <div className="border card-info rounded-3">
                <div className="image p-2">
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div className="topic-info d-flex p-4 justify-content-between">
                    <h5>Name: {name}</h5>
                    <button onClick={()=>handleSelect(id)} className='btn btn-primary'>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;