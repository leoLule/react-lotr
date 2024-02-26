import React from 'react'
import styles from './movies.module.css'

const Movies = ({ data }) => {
    return (
        <div className={styles.moviesDashboard}>
            {data.docs.map((movie, index) => {
                return <p key={index}>{movie.name}</p>
            })}
        </div>
    )
}

export default Movies
