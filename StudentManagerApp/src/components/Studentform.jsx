import { useContext } from "react"
import { StudentContext } from "../context/StudentContext"
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

    function handleChange(e){
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]: value
        })
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

        AddStudent()
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
                <input type="Date" name="DateofBirth" value={formData.DateofBirth} onChange={handleChange} />
                <input type="text" name="nation" value={formData.nation} onChange={handleChange} />
                <label htmlFor="Gender">Gender:</label>
                <input type="radio" name="gender" value="Male" onChange={handleChange} />
                <input type="radio" name="gender" value="Female" onChange={handleChange} />
                <button type="submit">Add Student</button> 
            </form>
        </>
    )
}


export default StudentForm