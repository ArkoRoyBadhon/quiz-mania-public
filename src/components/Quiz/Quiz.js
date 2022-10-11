import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question/Question';


const Quiz = () => {
    const topic = useLoaderData();

    // const [aa, setAa] = useState(0);
    const arr = [];
    let correctAns = 0;

    const { name, questions, total } = topic.data;
    // console.log('ff',questions);
    let count = 0;
    console.log('initital', count);

    const handleClick = (number, id, e) => {
        const result = questions.find(individual => individual.id === id);
        let findY = arr.find(elem => elem === id)
        if (findY) {
            console.log('again click');
        } else {
            count++;
            console.log('inside', count);
            if (result) {
                if (result.correctAnswer === number) {
                    e.target.classList.add('selectBtnRight');
                    alert('yes you click on right button');

                    // correctAns += 1;
                } else {
                    e.target.classList.add('selectBtnWrong');
                    alert(`you click wrong button. right ans is ${result.correctAnswer}`)
                }
            }
        }
        arr.push(id);
    }

    console.log('last', count);
    return (
        
            <div>
                <h2>Quiz for {name}</h2>
                <h4>Total questions: {total}</h4>
                <p>Correct Answer is : {correctAns}/{count}</p>
                {
                    questions.map(ques => <Question key={ques.id} ques={ques} id={ques.id} handleClick={handleClick}></Question>)
                }
            </div>
    );
};

export default Quiz;