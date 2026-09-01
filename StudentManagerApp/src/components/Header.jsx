import HeaderStyle from "../style/Header.module.css"
import { Link } from "react-router-dom"
function Header(){
    return (
        <header className={HeaderStyle.header}>
            <nav>
                <ul>
                    <Link className={HeaderStyle.link} to="Home">Home</Link>
                    <Link className={HeaderStyle.link} to="Dashboard">Statistics</Link>
                    <Link className={HeaderStyle.link} to="StudentsForm">NewStudent</Link>
                    <Link className={HeaderStyle.link} to="StudentList">Manage Students</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header