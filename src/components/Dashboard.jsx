import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import Options from './Options'
import useFetchData from '../hooks/useFetchData'
import Characters from './Characters'
import Movies from './Movies'
import Books from './Books'

const Dashboard = () => {
    const [selection, setSelection] = useState(null)
    const { data, loading, error } = useFetchData(selection)
    // console.log('selection', selection)
    const apiUrl = 'https://the-one-api.dev/v2'
    const API_KEY = import.meta.env.VITE_API_KEY

    function onClickHandler(clickedButton) {
        return () => {
            setSelection(clickedButton)
            // fetchData(clickedButton)
        }
    }
    //curried function, needed when I want  to pass an argument onClick; but i can also use  and () => on the onClick if i dont want the syntax here in onClickHandler

    const dataRender = {
        character: <Characters data={data} />,
        book: <Books data={data} />,
        movie: <Movies data={data} />,
    }
    return (
        <div className={styles.dashboard}>
            <div>
                <h1>LOTR INFO</h1>
                <Options
                    selection={selection}
                    onClickHandler={onClickHandler}
                />
                {loading && <p>Loading...</p>}
                {/*  1.onClickHandler is the NAME. I m passing it can been anything(test or bla), but I have to receive the same name in the component and pass it into the function as (props)... can also use only props and destruct it after.. see in Options  */}
                {data && !loading && dataRender[selection]}
            </div>
        </div>
    )
}

export default Dashboard
