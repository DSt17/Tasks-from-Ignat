import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void  // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyEnter:(e: KeyboardEvent<HTMLInputElement>) =>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onKeyEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.someClass}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    onKeyDown={onKeyEnter}
                    className={inputClass}
                />
                <div className={s.errorText}>{error}</div>
            </div>
            <div>
                <button className={s.button} onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
