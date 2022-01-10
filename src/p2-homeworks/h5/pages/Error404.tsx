import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div>
            <div className={s.errorNumbers}>404</div>
            <div className={s.errorText}> Oops... Page not found!</div>
        </div>
    )
}

export default Error404
