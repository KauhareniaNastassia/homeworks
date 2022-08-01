import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initialStateType, loadingAC} from "./bll/loadingReducer";
import css from './HW10.module.css'

function HW10() {

    const loading = useSelector<AppStoreType, initialStateType>(state => state.loading)
    // useSelector, useDispatch


    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout( () => dispatch(loadingAC(false)),2000 )
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <div className={css.homework_title}>
                Homework 10
            </div>

            <div className={css.wrapper}>
                {loading.loading
                    ? (
                        <div className={css.loader}>
                            <div className={css.inner1}></div>
                            <div className={css.inner2}></div>
                            <div className={css.inner3}></div>
                        </div>
                    ) : (
                        <div>
                            <SuperButton className={css.btn}
                                         onClick={setLoading}> set </SuperButton>
                        </div>
                    )
                }
            </div>

            {/*should work (должно работать)*/}



        </div>
    )
}

export default HW10
