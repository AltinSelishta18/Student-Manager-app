import { useContext, useEffect, useState } from "react"
import { StudentContext } from "../context/StudentContext"
import StudentFormStyle from "../style/StudentForm.module.css"
import { useParams } from "react-router-dom"
function StudentForm(){
        const {
            students,
            AddStudent,
            DeleteStudent,
            EditStudent,
            SaveStudent,
            formData,
            setFormData,
            currentId,
            setCurrentId
            
        } = useContext(StudentContext)
        const [errors, setErrors] = useState({})
        const [message, setMessage] = useState("")

        // useParams() using to fill the formular with the selected student info 
        const { id } = useParams()

        useEffect(() =>{
            if(id){
                const selectedStudent = students.find(student => student.id === Number(id) )
                if(!selectedStudent) return
                setFormData(selectedStudent)
                setCurrentId(selectedStudent.id)
            } 
        }, [id, students, setFormData, setCurrentId])

    function handleChange(e){
        const {name, value} = e.target

        const updatedData = {
            ...formData,
            [name]: value

        }

        if(name === "name" || name === "surname"){
            updatedData.Email = `${updatedData.name}-${updatedData.surname}@uni-Gjilan.net`
        }

        setFormData(updatedData)

        if(value.trim() !== ""){
            setErrors({
                ...errors,
                [name]: ""
            })
        }

    }

    function Validate(){
        const newErrors = {};

        if(!formData.name.trim()){
            newErrors.name = true;
        }

        if(!formData.surname.trim()){
            newErrors.surname = true;
        }

        if(!formData.DateofBirth.trim()){
            newErrors.DateofBirth = true;
        }

        if(!formData.nation.trim()){
            newErrors.nation = true;
        }

        if(formData.Department === "Fakultetet"){
            newErrors.Department = true;
        }

        if(!formData.gender.trim()){
            newErrors.gender = true;
        }

        return newErrors
    }


    function handleSubmit(e){
        e.preventDefault();

        const Validationerrors = Validate()

        setErrors(Validationerrors);

        if(Object.keys(Validationerrors).length === 0){
            if(id !== undefined){
                SaveStudent()
            }
            else{
                AddStudent()
            }

            setMessage(
                id !== undefined 
                ? "Studenti është edituar me Sukses!"
                : "Studenti eshte shtuar me Sukses!"
            )
            
            setFormData({
                name: "",
                surname: "",
                DateofBirth: "",
                nation: "",
                Department: "Drejtimet",
                gender: ""
            })
        }
        
    }
    console.log(students)
    return (
        <>
            {message && (
                <p className={StudentFormStyle.successfulMessage}>
                    {message}
                    <span>✅</span>
                </p>
            )}
            <div className={StudentFormStyle.container}>
                <form className={StudentFormStyle.form} action="" onSubmit={handleSubmit}>
                    <h1>SM<span>UT</span></h1>
                    <input className={errors.name ? StudentFormStyle.error: ""} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Emri Studentit/es" autoComplete="off" />
                    <input  className={errors.surname ? StudentFormStyle.error: ""} type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Mbiemri Studentit/es" autoComplete="off"/>
                    <input  className={errors.DateofBirth ? StudentFormStyle.error: ""} type="Date" name="DateofBirth" value={formData.DateofBirth} onChange={handleChange} placeholder="Datëlindja Studentit/es" autoComplete="off"/>
                    <input  className={errors.nation ? StudentFormStyle.error: ""} type="text" name="nation" value={formData.nation} onChange={handleChange} placeholder="Nacionaliteti Studentit/es" autoComplete="off"/>
                    <select  className={errors.Department ? StudentFormStyle.error: ""} name="Department" value={formData.Department} onChange={handleChange}>
                         <option value="Drejtimet">Drejtimi</option>
                         <option value="Inxhinieri Sofuterike">Inxhinieri Sofuterike</option>
                         <option value="Robotike">Robotikë</option>
                         <option value="Zhvillim i Web Aplikacioneve">Zhvillim i Web Aplikacioneve</option>
                         <option value="Intelegjencë Artificiale">Intelegjencë Artificiale</option>
                         <option value="Siguri Kibernetike dhe Rrjeta">Siguri Kibernetike dhe Rrjeta</option>
                         <option value="Game Development">Game Development</option>
                         <option value="Shkenca e të Dhënave">Shkenca e të Dhënave</option>
                         <option value="IT">IT</option>
                    </select>
                    <label className={StudentFormStyle.genderLabel} htmlFor="Gender">Gjinia Studentit/es:</label>
                    <div className={StudentFormStyle.gender}>
                        <label htmlFor="Mashkull">Mashkull</label>
                        <input  className={errors.gender ? StudentFormStyle.error: ""} id="Mashkull" checked={formData.gender === "Mashkull"} type="radio" name="gender" value="Mashkull" onChange={handleChange} />
                        <label htmlFor="Femër">Femër</label>
                        <input  className={errors.gender ? StudentFormStyle.error: ""} id="Femër" checked={formData.gender === "Femër"} type="radio" name="gender" value="Femër" onChange={handleChange} />
                    </div>
                    <button className={StudentFormStyle.submitBtn} type="submit">{id !== undefined ? "Edit Student" : "Add Student"}</button> 
                </form>
            </div>
        </>
    )
}


export default StudentForm