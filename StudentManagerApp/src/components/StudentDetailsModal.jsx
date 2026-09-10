import { useContext } from "react"
import StudentDetailsStyle from "../style/StudentDetails.module.css"
import { StudentContext } from "../context/StudentContext"
import { Link } from "react-router-dom"

function StudentDetails() {
    const {selectedStudent,
            CloseStudentDetails,
            RenderGenderImage,
            DeleteStudent,
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
                                <p>Student ID: {selectedStudent.student_Id}</p>
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
                                <li>Emri: {selectedStudent.name}</li>
                                <li>Mbiemri: {selectedStudent.surname}</li>
                                <li>Student Id: {selectedStudent.student_Id}</li>
                                <li>Datëlindja: {FormatDate(selectedStudent.DateofBirth)}</li>
                                <li>Nacionaliteti: {selectedStudent.nation}</li>
                                <li>Gjinia: {selectedStudent.gender}</li>
                            </ul>
                       </div>
                        <div className={StudentDetailsStyle.AcademicManagement}>
                            <div className={StudentDetailsStyle.AcademicInfo}>
                                <h3>Academic Information:</h3>
                                <ul>
                                    <li>Drejtimi: {selectedStudent.Department}</li>
                                    <li>Email: {selectedStudent.Email}</li>
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