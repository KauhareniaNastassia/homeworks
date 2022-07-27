import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import css from './HW8.module.css'

// export type UserType =

export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={css.people}>
            <span className={css.text}>{p.name}</span> < span className={css.text}>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-UP', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT-DOWN', payload: 'down'}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK-18', payload: 18}))

    return (
        <div>
            <hr/>
            <div className={css.homework_title}>
                Homework 8
            </div>

            <div className={css.wrapper}>
                <div>
                    {finalPeople}
                </div>

                <div className={css.btn_block}>
                    <div><SuperButton className={css.btn} onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton className={css.btn} onClick={sortDown}>sort down</SuperButton></div>
                    <div><SuperButton className={css.btn} onClick={checkAge}>check 18+</SuperButton></div>
                </div>
            </div>
            {/*should work (должно работать)*/}
        </div>
    )
}

export default HW8


/*
как сделать так, чтобы кнопка оставалась активной после нажатия
как закрепить меню*/
