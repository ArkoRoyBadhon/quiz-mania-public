import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';

const Quiz = () => {
    const topic = useLoaderData();

    const { name, questions, total } = topic.data;
    // console.log('ff',questions);
    let count =0;
    const handleClick = (number, id, e) => {
        // console.log(e.target.innerText);
        console.log(number,id);
        const result = questions.find(individual => individual.id === id);

        // let count+id = 0;
        
        if (result && count === 0) {
            // console.log(result.correctAnswer);
            if (result.correctAnswer === number) {
                e.target.classList.add('selectBtnRight');
                alert('yes you click on right button');
                // count++;
                // console.log(e.target);
            } else {
                e.target.classList.add('selectBtnWrong');
                console.log(e.target.parentElement.parentElement);
                e.target.parentElement.parentElement.classList.add('disabled');
                alert(`you click wrong button. right ans is ${result.correctAnswer}`)
            }

        }
    }

    return (
        <div>
            <h2>Quiz for {name}</h2>
            <h4>Total questions: {total}</h4>
            {
                questions.map(ques => <Question key={ques.id} ques={ques} id={ques.id} handleClick={handleClick}></Question>)
            }
        </div>
    );
};

export default Quiz;