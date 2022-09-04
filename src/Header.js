import React from 'react'
import logo from './logo192.png'

function Header(props) {


    const styles = {
        backgroundColor: (props.lightMode) ? "rgb(247 247 247)" : '',
    }

    return (
        <header className="header" style={styles}>
            <div className="logo-area">
                <img src={logo} alt="logo" />
                <h3>ReactFacts</h3>                
            </div>
            <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={props.toggle}
                />
                <span className="slider round"></span>
            </label>
        </header>
    )
}

export default Header