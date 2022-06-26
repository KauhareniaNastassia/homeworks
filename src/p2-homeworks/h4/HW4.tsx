import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import css from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import s from "../../p1-main/m1-ui/u1-app/App.module.css"
import css_btn from "./common/c2-SuperButton/SuperButton.module.css"

 export function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            <div className={s.homework_title}>
               Homework 4
            </div>

            <div className={css.wrapper}>
                <div className={css.column}>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        // spanClassName={s.testSpanError}
                    />

                    <SuperInputText
                        className={css.blue} // проверьте, рабоет ли смешивание классов
                    />

                    {/*----------------------------------------------------*/}

                    <SuperButton className={css_btn.btn}>
                        default
                    </SuperButton>

                    <SuperButton className={css_btn.btn}
                        red // пропсу с булевым значением не обязательно указывать true
                        onClick={showAlert}
                    >
                        delete {/*// название кнопки попадёт в children*/}
                    </SuperButton>

                    <SuperButton disabled>
                        disabled
                    </SuperButton>

                    {/*----------------------------------------------------*/}

                    <SuperCheckbox
                        checked={checked}
                        onChangeChecked={setChecked}
                    >
                        some text {/*// этот текст попадёт в children*/}
                    </SuperCheckbox>

                    {/*// onChange тоже должен работать*/}
                    <SuperCheckbox checked={checked} onChange={testOnChange}/>
                </div>
            </div>


           {/* <hr/>
            для личного творчества, могу проверить
            <AlternativeSuperInputText/>
            <AlternativeSuperButton/>
            <AlternativeSuperCheckbox/>
            <hr/>*/}
        </div>
    )
}

export default HW4
