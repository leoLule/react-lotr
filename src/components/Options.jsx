import React from 'react'
import styles from './options.module.css'

function Options({ selection, onClickHandler }) {
    const questions = ['character', 'movie', 'book']
    // const { selection, setSelection } = props
    console.log('(selection)', selection)

    // if i would use setSelection i would not use the function onClickHandler, in my case it would work now, but if i want to do more the just setting selection with setSelection i need to have the onClickHandler used onClick. - feel it is a better practice to use the onClickHandler

    return (
        <>
            {questions.map((question, index) => (
                <button
                    onClick={onClickHandler(question)}
                    className={`${styles.button} ${
                        question === selection
                            ? styles.selectedButton
                            : styles.nonSelectedButton
                    }`}
                    key={question}
                >
                    {question}
                </button>
            ))}
        </>
    )
}
export default Options
//it is not a good practice to to pass the index as key. If your questions array is static and will not change over time, using the index might be acceptable. However, if the array is dynamic and can change, it's better to use a unique identifier associated with each question.

// what if i pass question as key?

// ChatGPT
// Using the question itself as a key is generally fine if you can guarantee that the questions are unique and stable over time. However, it's important to consider a few factors:

// Uniqueness: Ensure that each question in your array is unique. If there's a possibility of having duplicate questions, it's better to use a unique identifier.

//   Stability: If the questions are static and will not change, using the question text as a key may be acceptable.However, if questions can change or new questions can be added, it's safer to use a stable unique identifier.;

// In this case, since the questions are simple strings and assumed to be unique, using the question itself as a key is acceptable. However, if your questions become more complex objects or if there's a chance of duplicates, using a dedicated unique identifier would be a safer practice.
