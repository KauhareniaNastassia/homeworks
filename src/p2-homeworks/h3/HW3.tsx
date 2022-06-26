import React, {ChangeEvent, useState} from 'react'
import {v1} from "uuid";
import {GreetingContainer} from "./GreetingContainer";
import s from "../../p1-main/m1-ui/u1-app/App.module.css"

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newUser = {_id: v1(), name: name}
        let addUser = [newUser, ...users]
        setUsers(addUser) // need to fix
    }

    return (
        <div>
            <hr/>
            <div className={s.homework_title}>
                Homework 3
            </div>


            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

        </div>
    )
}

export default HW3
