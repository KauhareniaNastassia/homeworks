import React, {ChangeEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

export type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: KeyboardEvent) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, onEnter, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input// need to fix with (?:)


    return (
        <div className={s.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    //onKeyDown={onEnter}
                />
                <span className={s.error}>{error}</span>
            </div>

            <button onClick={addUser} disabled={!name} className={s.button}>add</button>
            <span className={s.count}>{totalUsers}</span>

        </div>
    )
}

export default Greeting
