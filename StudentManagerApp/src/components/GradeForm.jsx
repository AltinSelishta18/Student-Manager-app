import GradeFormStyle from "../style/GradeForm.module.css"
import subjects from "../data/subjects";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { useParams } from "react-router-dom";

function GradeForm(){

    const { students, FormGrade, setFormGrade, AddGrade } = useContext(StudentContext);
    const { id } = useParams();

    const SelectedGradeStudent = students.find(student => student.id === Number(id));

    const studentSubjects = subjects[SelectedGradeStudent?.Department];

    function handleGradeChange(e){
        const { name, value} = e.target

        setFormGrade({
            ...FormGrade,
            [name]: value
        })
    }

    function handleGradeSubmit(e){
        e.preventDefault();

        if(FormGrade.subject === "Zgjidhni Lëndën"){
            alert("Ky opsion eshte i pavlefshem per te notuar nje student/e.")
        }
        else if(FormGrade.subject === "" || FormGrade.grade === ""){
            alert("Ju lutem plotesoni fushat e nevojshme!")
        }

        else if(FormGrade.grade < 5 || FormGrade.grade > 10){
            alert("Kjo note eshte e pavlefshme!")
        }
        else{
            AddGrade(id)
            console.log("Hello Students:", students)

            setFormGrade({
            subject: "",
            grade: ""
        })
        }


    }

    return (
        <>
            <div className={GradeFormStyle.GradeContainer}>
                    <form className={GradeFormStyle.GradeFormular} onSubmit={handleGradeSubmit}>
                        <h1>SM<span>UT</span></h1>
                        <div className={GradeFormStyle.AddGradeContainer}>
                            <select name="subject" id=""value={FormGrade.subject} onChange={handleGradeChange}>
                                {studentSubjects?.map((subject) => (
                                    <option key={subject} value={subject}>
                                        {subject}
                                    </option>
                                ))}
                        </select>
                        <input name="grade" type="number" value={FormGrade.grade} placeholder="Vendosni Notën nga (5-10)" onChange={handleGradeChange}/>
                        <button className={GradeFormStyle.GradeBtn} type="submit">Shto Notën</button>
                        </div>
                    </form>
            </div>
        </>
    )
}

export default GradeForm;