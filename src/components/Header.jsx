import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <Link to='/'>
            <header className="App-header">
                <h1>Create a Birthday Card for a friend!</h1>
            </header>
        </Link>
        
    )
}

export default Header;