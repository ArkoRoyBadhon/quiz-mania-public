import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const topics = useLoaderData();
    const navigate = useNavigate();
    const handleSelect = (id) => {
        navigate(`/quiz/${id}`)
    }

    return (
        <div className="">
            <div className="home-bg">
                <div id="carouselExampleSlidesOnly" class="carousel" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="img">
                                <img className='img' src={process.env.PUBLIC_URL + "/image/quiz.jpg"} class="d-block w-100" alt="..." />
                            </div>
                            
                            <div class="carousel-caption d-md-block  div-info">
                                <div >
                                    <h1>Welcome to Our Quiz Mania</h1>
                                    <p>You can test youself by giving our quiz</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row g-3 mt-3">
                    {
                        topics.data.map(topic =>
                            <Card key={topic.id} topic={topic} handleSelect={handleSelect}></Card>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;