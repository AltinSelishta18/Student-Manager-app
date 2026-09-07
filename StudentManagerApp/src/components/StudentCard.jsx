import StudentCardStyle from "../style/StudentCard.module.css"
import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"

function StudentCard({student}) {
    const { ShowStudentDetails, RenderGenderImage } = useContext(StudentContext)
    console.log(student.gender)

    return (
        <div className={StudentCardStyle.student}>
           <div className={StudentCardStyle.mainTitle}>
                <h1><span>SM</span>UT</h1>
           </div>
           <div className={StudentCardStyle.studentImage}>
                {student.gender === "Mashkull" 
                ? (
                    <img className={StudentCardStyle.img}  src={RenderGenderImage(student.gender)} alt="Male Profile Picture"/>
                )
                : (
                    <img className={StudentCardStyle.img} src={RenderGenderImage(student.gender)} alt="Female Profile Picture"/>
                )
            }
           </div>
           <div className={StudentCardStyle.studentDetails}>
                <h2>{student.name} {student.surname}</h2>
                <p>Student ID: {student.student_Id}</p>
           </div>
           <div className={StudentCardStyle.studentManage}>
                <h3 className={StudentCardStyle.barCode}></h3>
                <button onClick={() => ShowStudentDetails(student)}>Student Details</button>
           </div>
        </div>
    )

}

export default StudentCard