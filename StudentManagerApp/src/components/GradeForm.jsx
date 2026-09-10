import GradeFormStyle from "../style/GradeForm.module.css"
import subjects from "../data/subjects";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { useParams } from "react-router-dom";
function GradeForm(){

    const { students } = useContext(StudentContext);
    const { id } = useParams();

    const SelectedGradeStudent = students.find(student => student.id === Number(id))

    const studentSubjects = subjects[SelectedGradeStudent?.Department] 
    
    
    return (
        <>
            <div className={GradeFormStyle.GradeContainer}>
                    <form className={GradeFormStyle.GradeFormular} action="">
                        <h1>SM<span>UT</span></h1>
                        <div className={GradeFormStyle.AddGradeContainer}>
                            <select name="" id="">
                                {studentSubjects?.map((subject) => (
                                    <option key={subject} value={subject}>
                                        {subject}
                                    </option>
                                ))}
                        </select>
                        <input type="number" placeholder="Vendosni Notën nga (5-10)"/>
                        <button className={GradeFormStyle.GradeBtn} type="button">Shto Notën</button>
                        </div>
                    </form>
            </div>
        </>
    )
}

export default GradeForm;