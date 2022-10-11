import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const QuizBar = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                // console.log('axios',data.data.data);
                const topicLoaded = data.data.data;
                const topicData = topicLoaded.map(topic => {
                    // console.log(topic.total);
                    const singleTopic = {
                        name: topic.name,
                        total: topic.total
                    }
                    return singleTopic;
                })
                console.log(topicData);
                setTopics(topicData);
            })
    }, [])

    return (
        <div>
            <BarChart width={500} height={400} data={topics}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default QuizBar;
