import { useParams } from "react-router-dom"
import StudentSuccessDetailsStyle from "../style/StudentSuccesDetails.module.css"
import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"


function StudentSuccessDetails(){
    const { students, RenderGenderImage } = useContext(StudentContext)
    const { id } = useParams();

    const SelectedStudentRecord = students.find(student => student.id === Number(id));

    function CalculateAverage(SelectedStudentRecord){
         const StudentAverageGrade = SelectedStudentRecord.grades.length === 0 
            ? 0
            : SelectedStudentRecord.grades.reduce(
                (sum, gradeInfo) => sum + gradeInfo.grade, 0) / SelectedStudentRecord.grades.length

        return StudentAverageGrade
    }
    return (
        <div className={StudentSuccessDetailsStyle.container}>
            <div className={StudentSuccessDetailsStyle.header}>
                <div className={StudentSuccessDetailsStyle.StudentInfo}>
                    <img className={StudentSuccessDetailsStyle.studentImg} src={RenderGenderImage(SelectedStudentRecord.gender)} alt="" />
                    <div className={StudentSuccessDetailsStyle.PersonalInfo}>
                         <h1>{SelectedStudentRecord.name} {SelectedStudentRecord.surname}</h1>
                         <p>{SelectedStudentRecord.studentID}</p>
                         <p>{SelectedStudentRecord.Email}</p>
                         <p>Shkenca Kompjuterike | {SelectedStudentRecord.Department}</p>

                    </div>
                </div>
                <div className={StudentSuccessDetailsStyle.StudentAverage}>
                    <div className={StudentSuccessDetailsStyle.AverageInfo}>
                        <h4>Mesatarja:</h4>
                        <h2 className={StudentSuccessDetailsStyle.averageGrade}>{CalculateAverage(SelectedStudentRecord).toFixed(2)}</h2>
                        <p className={StudentSuccessDetailsStyle.ECTS}>ECTS(30)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSuccessDetails