import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {PATH} from "./Routes";

function Header() {
    return (
        <div className={s.slide}>
            <div className={s.slideContent}>
                <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>PreJunior</NavLink>
                <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>Junior+</NavLink>
            </div>
            <div className={s.slideHeader}>{">"}</div>
        </div>

    )
}

export default Header
