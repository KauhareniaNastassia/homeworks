import React from 'react'
import css_err from "./Error.module.css"

function Error404() {
    return (
        <div className={css_err.wrapper}>
            <div className={css_err.num}>404</div>

            <div className={css_err.message}>Oops... Something went wrong, but it's okey=)</div>

        </div>
    )
}


export default Error404
