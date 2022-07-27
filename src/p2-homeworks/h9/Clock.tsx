import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import css from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        window.clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            /*setTimeout(setDate)*/
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = String(date) // fix with date

    return (
        <div>
            <div className={css.display}>
                <div className={css.text}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={css.text}>
                        {stringDate}
                    </div>
                )}
            </div>
            <div className={css.btn_block}>
                <SuperButton className={css.btn} onClick={start}>start</SuperButton>
                <SuperButton  className={css.btn} onClick={stop}>stop</SuperButton>
            </div>



        </div>
    )
}

export default Clock
