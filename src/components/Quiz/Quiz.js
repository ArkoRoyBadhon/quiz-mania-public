import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = () => {
    const topic = useLoaderData();

    // const [aa, setAa] = useState(0);
    const arr = [];
    let correctAns = 0;

    const { name, questions, total } = topic.data;
    // console.log('ff',questions);
    let count = 0;
    // console.log('initital', count);

    const handleClick = (number, id, e) => {
        const result = questions.find(individual => individual.id === id);
        let findY = arr.find(elem => elem === id)
        if (findY) {
            // console.log('again click');
            toast('You already answered this question');
            
        } else {
            // count++;
            // console.log('inside', count);
            if (result) {
                if (result.correctAnswer === number) {
                    e.target.classList.add('selectBtnRight');
                    toast('yes!!! You click on right button');

                    // correctAns += 1;
                } else {
                    e.target.classList.add('selectBtnWrong');
                    toast(`Ohh no!! You click wrong button. right ans is ${result.correctAnswer}`);
                }
            }
        }
        arr.push(id);
    }

    const handleEyeAns = (id) => {
        const data = questions.find(question => question.id === id)
        const resultToast = data.correctAnswer;
        toast("Correct Ans is: " + resultToast);
        // toast(resultToast);
        // alert(resultToast)
    }

    console.log('last', count);
    return (

        <div>
            <h2>Quiz for {name}</h2>
            <h4>Total questions: {total}</h4>
            <p>Correct Answer is : {correctAns}/{count}</p>
            {
                questions.map(ques => <Question key={ques.id} ques={ques} id={ques.id} handleClick={handleClick} handleEyeAns={handleEyeAns}></Question>)
            }
        </div>
    );
};

export default Quiz;