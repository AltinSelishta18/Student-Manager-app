import MainContentStyle from "../style/MainContent.module.css"
import { Link } from "react-router-dom"
function MainContent(){
    return (
        <div className={MainContentStyle.mainContent}>  
                <h1 className={MainContentStyle.mainText}>Sistemi Menaxhues i <span>Universum Tech</span></h1>
                <p className={MainContentStyle.mainPrg}>Universum Tech është një institucion i fokusuar në teknologji, inovacion dhe zhvillimin e aftësive profesionale. Universiteti ofron një mjedis modern dhe të organizuar për edukimin dhe zhvillimin e studentëve.</p>
                <Link className={MainContentStyle.mainButton}>Log in</Link>
        </div>
    )
}

export default MainContent