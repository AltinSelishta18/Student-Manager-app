import { useContext, useState } from "react"
import { StudentContext } from "../context/StudentContext"
import StudentFormStyle from "../style/StudentForm.module.css"
function StudentForm(){
        const {
            students,
            AddStudent,
            DeleteStudent,
            EditStudent,
            SaveStudent,
            formData,
            setFormData
            
        } = useContext(StudentContext)
        const [errors, setErrors] = useState({})

    function handleChange(e){
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })

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
            AddStudent()
        }
        
    }
    console.log(students)
    return (
        <>
            <div className={StudentFormStyle.container}>
                <form className={StudentFormStyle.form} action="" onSubmit={handleSubmit}>
                    <h1>SM<span>UT</span></h1>
                    <input className={errors.name ? StudentFormStyle.error: ""} type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Emri Studentit/es" autoComplete="off" />
                    <input  className={errors.surname ? StudentFormStyle.error: ""} type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Mbiemri Studentit/es" autoComplete="off"/>
                    <input  className={errors.DateofBirth ? StudentFormStyle.error: ""} type="Date" name="DateofBirth" value={formData.DateofBirth} onChange={handleChange} placeholder="Datëlindja Studentit/es" autoComplete="off"/>
                    <input  className={errors.nation ? StudentFormStyle.error: ""} type="text" name="nation" value={formData.nation} onChange={handleChange} placeholder="Nacionaliteti Studentit/es" autoComplete="off"/>
                    <select  className={errors.Department ? StudentFormStyle.error: ""} name="Department" value={formData.Department} onChange={handleChange}>
                         <option value="Drejtimet">Drejtimet</option>
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
                        <input  className={errors.gender ? StudentFormStyle.error: ""} type="radio" name="gender" value="Male" onChange={handleChange} />
                        <label htmlFor="Femër">Femër</label>
                        <input  className={errors.gender ? StudentFormStyle.error: ""} type="radio" name="gender" value="Female" onChange={handleChange} />
                    </div>
                    <button className={StudentFormStyle.submitBtn} type="submit">Add Student</button> 
                </form>
            </div>
        </>
    )
}


export default StudentForm