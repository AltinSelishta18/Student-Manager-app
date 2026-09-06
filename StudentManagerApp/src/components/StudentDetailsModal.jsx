import { useContext } from "react"
import StudentDetailsStyle from "../style/StudentDetails.module.css"
import { StudentContext } from "../context/StudentContext"

function StudentDetails() {
    const {selectedStudent,
            CloseStudentDetails,
            RenderGenderImage,
            Modal} = useContext(StudentContext)

    if(!Modal) return null;
    
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
             </div>
        </div>
    )
}

export default StudentDetails