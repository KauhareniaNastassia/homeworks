import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import css from './HW7.module.css'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <hr/>
            <div className={css.homework_title}>
                Homework 7
            </div>

            <div className={css.wrapper}>
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>

            {/*should work (должно работать)*/}


            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeSuperSelect/>
            <AlternativeSuperRadio/>
            <hr/>*/}
        </div>
    )
}

export default HW7
