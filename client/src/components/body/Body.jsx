import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Login from './auth/Login'

const Body = () => {
    return (
        <section>
            <Routes >
                <Route path= '/login' element={<Login/>}/>
            </Routes >
        </section>
    )
}

export default Body
