import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = () => {
    const topic = useLoaderData();

 
    const arr = [];
    let correctAns = [];
    let final = [];

    const { name, questions, total } = topic.data;

    const handleClick = (number, id, e) => {
        const result = questions.find(individual => individual.id === id);
        let findY = arr.find(elem => elem === id)
        if (findY) {
 
            toast('You already answered this question');
            
        } else {

            if (result) {
                if (result.correctAnswer === number) {
                    e.target.classList.add('selectBtnRight');
                    toast('yes!!! You click on right button');
                } else {
                    e.target.classList.add('selectBtnWrong');
                    toast(`Ohh no!! You click wrong button. right ans is ${result.correctAnswer}`);
                }
            }
        }
        arr.push(id);
        final.push(correctAns.length);
    }

    const handleEyeAns = (id) => {
        const data = questions.find(question => question.id === id)
        const resultToast = data.correctAnswer;
        toast("Correct Ans is: " + resultToast);
    }

    return (
        <div>
            <h2>Quiz for {name}</h2>
            <h4>Total questions: {total}</h4>
            <p>Correct Answer is : {correctAns.length}</p>
            {
                questions.map(ques => <Question key={ques.id} ques={ques} id={ques.id} handleClick={handleClick} handleEyeAns={handleEyeAns}></Question>)
            }
        </div>
    );
};

export default Quiz;