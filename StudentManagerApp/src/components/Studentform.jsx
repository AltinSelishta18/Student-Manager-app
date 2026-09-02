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
            newErrors.name = "Name is Required!"
        }

        if(!formData.surname.trim()){
            newErrors.surname = "Surname is Required!"
        }

        if(!formData.DateofBirth.trim()){
            newErrors.DateofBirth = "Date of Birth is Required!"
        }

        if(!formData.nation.trim()){
            newErrors.nation = "Nation is Required!"
        }

        if(!formData.gender.trim()){
            newErrors.gender = "Gender is Required!"
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

    return (
        <>
            <div className={StudentFormStyle.container}>
                <form className={StudentFormStyle.form} action="" onSubmit={handleSubmit}>
                    <h1>SM<span>UT</span></h1>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Emri Studentit/es" autoComplete="off" />
                    <p className={StudentFormStyle.validationText}>{errors.name}</p>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Mbiemri Studentit/es" autoComplete="off"/>
                    <p className={StudentFormStyle.validationText}>{errors.surname}</p>
                    <input type="Date" name="DateofBirth" value={formData.DateofBirth} onChange={handleChange} placeholder="Datëlindja Studentit/es" autoComplete="off"/>
                    <p className={StudentFormStyle.validationText}>{errors.DateofBirth}</p>
                    <input type="text" name="nation" value={formData.nation} onChange={handleChange} placeholder="Nacionaliteti Studentit/es" autoComplete="off"/>
                    <p className={StudentFormStyle.validationText}>{errors.nation}</p>
                    <label className={StudentFormStyle.genderLabel} htmlFor="Gender">Gjinia Studentit/es:</label>
                    <p className={StudentFormStyle.validationText}>{errors.gender}</p>
                    <div className={StudentFormStyle.gender}>
                        <label htmlFor="Mashkull">Mashkull</label>
                        <input type="radio" name="gender" value="Male" onChange={handleChange} />
                        <label htmlFor="Femër">Femër</label>
                        <input type="radio" name="gender" value="Female" onChange={handleChange} />
                    </div>
                    <button className={StudentFormStyle.submitBtn} type="submit">Add Student</button> 
                </form>
            </div>
        </>
    )
}


export default StudentForm