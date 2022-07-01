import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "../../p1-main/m1-ui/u1-app/App.module.css";
import css from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value))
    }

    return (
        <div >
            <hr/>
            <div className={s.homework_title}>
                Homework 6
            </div>
            {/*should work (должно работать)*/}

            <div className={css.wrapper}>
                <div>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                    />
                </div>
                <SuperButton className={css.btn} onClick={save}>save</SuperButton>
                <SuperButton className={css.btn} onClick={restore}>restore</SuperButton>
            </div>



        </div>
    )
}

export default HW6
