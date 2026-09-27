import { useParams } from "react-router-dom"
import StudentSuccessDetailsStyle from "../style/StudentSuccesDetails.module.css"
import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"
import subjects from "../data/subjects"


function StudentSuccessDetails(){
    const { students, RenderGenderImage, DeleteGrade } = useContext(StudentContext)
    const { id } = useParams();



    const SelectedStudentRecord = students.find(student => student.id === Number(id));
    if(!SelectedStudentRecord) return null


    const SelectedSubject = subjects[SelectedStudentRecord.Department]

    function CalculateAverage(SelectedStudentRecord){
         const StudentAverageGrade = SelectedStudentRecord.grades.length === 0 
            ? 0
            : SelectedStudentRecord.grades.reduce(
                (sum, gradeInfo) => sum + gradeInfo.grade, 0) / SelectedStudentRecord.grades.length

        let AverageStyle = ""

        if(StudentAverageGrade === 0){
            AverageStyle = StudentSuccessDetailsStyle.DefaultStyle
        }
        else if(StudentAverageGrade >= 9){
            AverageStyle = StudentSuccessDetailsStyle.AverageHigh
        }
        else if(StudentAverageGrade >= 7){
            AverageStyle = StudentSuccessDetailsStyle.AverageMedium
        }
        else{
            AverageStyle = StudentSuccessDetailsStyle.AverageLow
        }

        return {
            average: StudentAverageGrade,
            style: AverageStyle
        }
    }

    const Average = CalculateAverage(SelectedStudentRecord)

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
                <div className={`${StudentSuccessDetailsStyle.StudentAverage} ${Average.style}`}>
                    <div className={StudentSuccessDetailsStyle.AverageInfo}>
                        <h4>Mesatarja:</h4>
                        <h2>{Average.average.toFixed(2)}</h2>
                        <p className={StudentSuccessDetailsStyle.ECTS}>ECTS(30)</p>
                    </div>
                </div>
            </div>
            <div className={StudentSuccessDetailsStyle.gradesContainer}>
                    <h2>Transkripta e Notave</h2>
                    <table className={StudentSuccessDetailsStyle.gradesTable}>
                        <thead>
                            <tr>
                                <th>Lënda</th>
                                <th>Kredite(ECTS)</th>
                                <th>Nota</th>
                                <th>&#128203;</th>
                            </tr>
                        </thead>
                        <tbody>
                        {SelectedSubject.map(subject => {

                            if(subject === "Zgjidhni Lëndën"){
                                return null
                            }


                            const FoundGrade = SelectedStudentRecord.grades.find(grade => subject === grade.subject)
                            console.log("Nota gjetur", FoundGrade)
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
                                        <td>
                                            {FoundGrade === undefined
                                                ? "I pa notuar"
                                                : FoundGrade.grade === 5
                                                ? "Studenti nuk ka kaluar"
                                                :(
                                                    <>
                                                        <button onClick={() => DeleteGrade(SelectedStudentRecord.id, FoundGrade.id)} className={StudentSuccessDetailsStyle.manageGradeBtn}>&#215;</button>
                                                        <button className={StudentSuccessDetailsStyle.manageGradeBtn}>&#9999;</button>
                                                   </>
                                                ) 
                                            }
                                        </td>
                                    </tr>
                                
                            )
                            
                        })}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default StudentSuccessDetails