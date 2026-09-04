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
           <div className={StudentCardStyle.mainTitle}>
                <h1><span>SM</span>UT</h1>
           </div>
           <div className={StudentCardStyle.studentImage}>
                {student.gender === "Male" 
                ? (
                    <img className={StudentCardStyle.img} src="/male-picture.png" alt="Male Profile Picture"/>
                )
                : (
                    <img className={StudentCardStyle.img} src="/female-picture.png" alt="Female Profile Picture"/>
                )
            }
           </div>
           <div className={StudentCardStyle.studentDetails}>
                <h2>{student.name} {student.surname}</h2>
                <p>Student ID: {student.student_Id}</p>
           </div>
           <div className={StudentCardStyle.studentManage}>
                <h3 className={StudentCardStyle.barCode}></h3>
                <button>Student Details</button>
           </div>
        </div>
    )

}

export default StudentCard