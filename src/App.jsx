import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
    return (
        <div className='App'>
            {/* <header>this is the header</header> */}
            <main>
                <img
                    className='bg-image'
                    src='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-01/220119-lord-of-the-rings-amazon-ew-1148-78f178.jpg'
                    alt='lotr-backbround-img'
                />
                <Dashboard />
            </main>
            {/* <footer>this is the footer</footer> */}
        </div>
    )
}

export default App
