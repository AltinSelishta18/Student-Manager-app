import GradeFormStyle from "../style/GradeForm.module.css"

function GradeForm(){
    return (
        <>
            <div className={GradeFormStyle.GradeContainer}>
                    <form className={GradeFormStyle.GradeFormular} action="">
                        <h1>SM<span>UT</span></h1>
                    </form>
            </div>
        </>
    )
}

export default GradeForm;