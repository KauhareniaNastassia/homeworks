import React from 'react'
import {NavLink} from "react-router-dom";
import s from './HW5.module.css'

function Header() {
    return (
        <div className={s.block}>
            <div className={s.header}>
                <NavLink className={s.nlink} to={'/pre-junior'}>PRE-JUNIOR</NavLink>

                <NavLink className={s.nlink} to={'/junior'}>JUNIOR</NavLink>

                <NavLink className={s.nlink} to={'/junior_plus'}>JUNIOR-PLUS</NavLink>
            </div>




        </div>
    )
}

export default Header
