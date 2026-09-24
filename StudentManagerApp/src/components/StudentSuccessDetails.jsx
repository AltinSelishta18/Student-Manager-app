import { useParams } from "react-router-dom"
import StudentSuccessDetailsStyle from "../style/StudentSuccesDetails.module.css"
import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"
import subjects from "../data/subjects"


function StudentSuccessDetails(){
    const { students, RenderGenderImage } = useContext(StudentContext)
    const { id } = useParams();


    const SelectedStudentRecord = students.find(student => student.id === Number(id));

    const SelectedSubject = subjects[SelectedStudentRecord.Department]

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
            <div className={StudentSuccessDetailsStyle.gradesContainer}>
                    <h2>Pasqyra e Notave dhe Lëndëve</h2>
                    <table className={StudentSuccessDetailsStyle.gradesTable}>
                        <tr>
                            <th>Lënda</th>
                            <th>Kredite(ECTS)</th>
                            <th>Nota</th>
                        </tr>
                        {SelectedSubject.map(subject => {

                            if(subject === "Zgjidhni Lëndën"){
                                return null
                            }


                            const FoundGrade = SelectedStudentRecord.grades.find(grade => subject === grade.subject)

                            let GradeStyle = "";

                            if(!FoundGrade){
                                GradeStyle = StudentSuccessDetailsStyle.NoGrade
                            }
                            else if(FoundGrade.grade >= 9){
                                GradeStyle = StudentSuccessDetailsStyle.gradeHigh
                            }
                            else if(FoundGrade.grade >= 8){
                                GradeStyle = StudentSuccessDetailsStyle.gradeMedium
                            }
                            else{
                                GradeStyle = StudentSuccessDetailsStyle.gradeLow
                            }

                            return (
                                <tr key={subject}>
                                    <td>{subject}</td>
                                    <td>ECTS(30)</td>
                                    <td><p className={GradeStyle}>{FoundGrade !== undefined ? FoundGrade.grade : "I pa notuar"}</p></td>
                                </tr>
                            )
                            
                        })}
                    </table>
            </div>
        </div>
    )
}

export default StudentSuccessDetails