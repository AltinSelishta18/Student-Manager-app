import { useContext } from "react"
import StudentDetailsStyle from "../style/StudentDetails.module.css"
import { StudentContext } from "../context/StudentContext"
import { Link } from "react-router-dom"

function StudentDetails() {
    const {selectedStudent,
            CloseStudentDetails,
            RenderGenderImage,
            DeleteStudent,
            students,
            Modal} = useContext(StudentContext)


    if(!Modal) return null;


    function FormatDate(date){
        const Date = date.split("-")
        const birthDate_Year = Date[0]

        Date[0] = Date[Date.length - 1]

        const newDate = Date.slice(0, -1)
        const YearAdded = [...newDate, birthDate_Year]
        const UpdatedDate = YearAdded.join("-")
        return UpdatedDate;
    }

    /* 
        updatedStudent updates the data of a specific student so after we add a grade to a student
        the average grade calculates automatically without needing to refresh the web page. 

    */
    const updatedStudent =  students.find(student => student.id === selectedStudent.id)


    // Calculate Average Grade for Each Student
        const StudentAverageGrade = updatedStudent.grades.length === 0 
            ? 0
            : updatedStudent.grades.reduce(
                (sum, gradeInfo) => sum + gradeInfo.grade, 0) / updatedStudent.grades.length

    

    
    return (
        <div className={StudentDetailsStyle.StudentContainer}>
             <div className={StudentDetailsStyle.StudentModal}>
                 <div className={StudentDetailsStyle.header}>
                    <div className={StudentDetailsStyle.StudentProfile}>
                        <div className={StudentDetailsStyle.ProfileImage}>
                            <img className={StudentDetailsStyle.img}  src={RenderGenderImage(selectedStudent.gender)}/>
                        </div>
                        <div className={StudentDetailsStyle.ProfileInfo}>
                                <h4>{selectedStudent.name} {selectedStudent.surname}</h4>
                                <p>Student ID: {selectedStudent.studentID}</p>
                                <h3 className={StudentDetailsStyle.barCode}></h3>
                        </div>
                    </div>
                    <div className={StudentDetailsStyle.closeModal}>
                        <button onClick={() => CloseStudentDetails(false)}>×</button>
                    </div>  
                 </div>
                 <div className={StudentDetailsStyle.body}>
                       <div className={StudentDetailsStyle.StudentPersonalInfo}>
                            <h3>Personal Information</h3>
                            <ul className={StudentDetailsStyle.list}>
                                <li>Emri: {updatedStudent.name}</li>
                                <li>Mbiemri: {updatedStudent.surname}</li>
                                <li>Student ID: {updatedStudent.studentID}</li>
                                <li>Datëlindja: {FormatDate(updatedStudent.DateofBirth)}</li>
                                <li>Nacionaliteti: {updatedStudent.nation}</li>
                                <li>Gjinia: {updatedStudent.gender}</li>
                            </ul>
                       </div>
                        <div className={StudentDetailsStyle.AcademicManagement}>
                            <div className={StudentDetailsStyle.AcademicInfo}>
                                <h3>Academic Information:</h3>
                                <ul>
                                    <li>Drejtimi: {updatedStudent.Department}</li>
                                    <li>Mesatarja: {StudentAverageGrade.toFixed(2)}</li>
                                    <li>Email: {updatedStudent.Email}</li>
                                </ul>
                            </div>
                            <div className={StudentDetailsStyle.actions}>
                                    <button className={StudentDetailsStyle.button} onClick={() => DeleteStudent(selectedStudent.id)}>Delete Student</button>
                                    <Link className={StudentDetailsStyle.button} to={`/StudentForm/${selectedStudent.id}`}>Edit Student</Link>
                                    <Link className={StudentDetailsStyle.button} to={`/GradeForm/${selectedStudent.id}`}>Add Grade</Link>
                            </div>
                       </div>
                 </div>
             </div>
        </div>
    )
}

export default StudentDetails