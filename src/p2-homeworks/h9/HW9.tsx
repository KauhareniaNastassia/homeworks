import React from 'react'
import Clock from './Clock'
import css from './HW9.module.css'

function HW9() {
    return (
        <div>
            <hr/>
            <div className={css.homework_title}>
                Homework 9
            </div>

            {/*should work (должно работать)*/}
            <Clock/>


        </div>
    )
}

export default HW9
