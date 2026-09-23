import { useParams } from "react-router-dom"
import StudentSuccessDetailsStyle from "../style/StudentSuccesDetails.module.css"
import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"


function StudentSuccessDetails(){
    const { students, RenderGenderImage } = useContext(StudentContext)
    const { id } = useParams()

    const SelectedStudentRecord = students.find(student => student.id === Number(id));
    return (
        <div className={StudentSuccessDetailsStyle.container}>
            <div className={StudentSuccessDetailsStyle.header}>
                <div className={StudentSuccessDetailsStyle.StudentInfo}>
                    <img className={StudentSuccessDetailsStyle.studentImg} src={RenderGenderImage(SelectedStudentRecord.gender)} alt="" />
                    <p className={StudentSuccessDetailsStyle.textInfo}>{SelectedStudentRecord.name} {SelectedStudentRecord.surname} | {SelectedStudentRecord.studentID} | {SelectedStudentRecord.Department}</p>
                </div>
                <div className={StudentSuccessDetailsStyle.StudentAverage}>
                    s
                </div>
            </div>
        </div>
    )
}

export default StudentSuccessDetails