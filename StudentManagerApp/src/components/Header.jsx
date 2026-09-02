import HeaderStyle from "../style/Header.module.css"
import { Link } from "react-router-dom"
function Header(){
    return (
        <header className={HeaderStyle.header}>
            <h1><span>SM</span>UT</h1>
            <nav>
                <ul>
                    <Link className={HeaderStyle.link} to="Home">Home</Link>
                    <Link className={HeaderStyle.link} to="Dashboard">Statistics</Link>
                    <Link className={HeaderStyle.link} to="/StudentForm">NewStudent</Link>
                    <Link className={HeaderStyle.link} to="StudentList">Manage Students</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header