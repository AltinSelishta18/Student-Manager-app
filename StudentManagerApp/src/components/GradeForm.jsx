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
    console.log("Departments:", SelectedGradeStudent)
    
    
    return (
        <>
            <div className={GradeFormStyle.GradeContainer}>
                    <form className={GradeFormStyle.GradeFormular} action="">
                        <h1>SM<span>UT</span></h1>
                        <select name="" id="">
                            {studentSubjects?.map((subject) => (
                                <option key={subject} value={subject}>
                                    {subject}
                                </option>
                            ))}
                        </select>
                    </form>
            </div>
        </>
    )
}

export default GradeForm;