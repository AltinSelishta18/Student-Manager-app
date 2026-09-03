import { StudentContext } from "../context/StudentContext"
import { useContext } from "react"
import StudentCard from "./StudentCard";
import StudentListStyle from "../style/StudentList.module.css"
function StudentList() {
    const {students} = useContext(StudentContext);

    return(
        <>
           <div className={StudentListStyle.container}>
                {students.length === 0 
                    ? <p className={StudentListStyle.noResult}>There is no Student Registered &#128522;</p>
                    : students.map(student => (
                    <StudentCard student={student} key={student.id}/>
                    ))
                }
           </div>
        </>
    )
}

export default StudentList