import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Card from '../Card/Card';

const Home = () => {
    const topics = useLoaderData();
    const navigate = useNavigate();
    // console.log(topics);
    const handleSelect = (id) => {
        // console.log(id);
        navigate(`/home/${id}`)
    }
    return (
        <div className='container'>
            <div className="row g-3 mt-3">
                {
                    topics.data.map(topic =>
                        <Card key={topic.id} topic={topic} handleSelect={handleSelect}></Card>
                    )
                }
            </div>
        </div>
    );
};

export default Home;