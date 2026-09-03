import StudentCardStyle from "../style/StudentCard.module.css"

function StudentCard({student}) {

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
        <div className={StudentCardStyle.student}>
            <div className={StudentCardStyle.ProfileContainer}>
                {student.gender === "Male"
                    ? (<img className={StudentCardStyle.img} src="/male-picture.png" alt="Male Profile Picture"/>)
                    : (
                        <img className={StudentCardStyle.img} src="/female-picture.png" alt="Female Profile Picture"/>
                    )
                } 
            </div>
            <p>Studenti: {student.name} {student.surname}</p>
            <p>Student ID: {student.student_Id}</p>
            
        </div>
    )

}

export default StudentCard