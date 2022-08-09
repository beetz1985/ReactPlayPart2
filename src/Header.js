
import logo from './logo192.png'

function Header() {
    return (
        <header className="header">
            <div className="logo-area">
                <img src={logo} alt="logo" />
                <h3>ReactFacts</h3>                
            </div>
            <h4>
                React Course - Project 1
            </h4>
        </header>
    )
}

export default Header