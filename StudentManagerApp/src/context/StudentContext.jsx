// Here will be created the main logics of the Student Manager App

import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({children}){

    const [students, setStudents] = useState(
        JSON.parse(localStorage.getItem("students")) || []
    );

    useEffect(() =>{
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    console.log(localStorage.getItem("students"))


    const [currentId, setCurrentId] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        DateofBirth: "",
        nation: "",
        Email: "",
        gender: "",
        grades: []
    })

    const [selectedStudent, setSelectedStudent] = useState(null)
    const [Modal, setModal] = useState(false)

     // CRUD functions

     const GenderImages = {
        Male: "/male-picture.png",
        Female: "/female-picture.png"
     }

     function RenderGenderImage(gender){
        return GenderImages[gender]
     }

     function AddStudent(){
        const newStudent = {
            id: Date.now(),
            name: formData.name,
            surname: formData.surname,
            student_Id: `ST-${Date.now()}`,
            Department: formData.Department,
            DateofBirth: formData.DateofBirth,
            nation: formData.nation,
            Email: `${formData.name}-${formData.surname}@uni-Gjilan.net`,
            gender: formData.gender,
            grades: formData.grades
        }

        setStudents([...students, newStudent]);

        setFormData({
            name: "",
            surname: "",
            DateofBirth: "",
            nation: "",
            Email: "",
            gender: "",
            grades: []
        })
     }

     function DeleteStudent(id){
        setStudents(students.filter(student => student.id !== id));
     }

     function EditStudent(id){
        const editedStudent = students.find(student => student.id === id);

        setFormData({...editedStudent})
        setCurrentId(id)
     }

     function SaveStudent(){
        const savedStudent = {
            id: currentId,
            name: formData.name,
            surname: formData.surname,
            DateofBirth: formData.DateofBirth,
            nation: formData.nation,
            Email: formData.Email,
            gender: formData.gender,
            grades: formData.grades
        }

        setStudents(students.map(student => student.id === currentId
            ? savedStudent
            : student
        ))

        setCurrentId(null)
        setFormData({
            name: "",
            surname: "",
            DateofBirth: "",
            nation: "",
            Email: "",
            gender: "",
            grades: []
        })
     }

     function ShowStudentDetails(student){
        setSelectedStudent(student)
        setModal(true)
     }

     function CloseStudentDetails(){
        setModal(false)
        setSelectedStudent(null)
     }


     

    return (
        <StudentContext.Provider value={{
            students,
            AddStudent,
            DeleteStudent,
            EditStudent,
            SaveStudent,
            formData,
            setFormData,
            RenderGenderImage,
            ShowStudentDetails,
            selectedStudent,
            CloseStudentDetails,
            Modal
        }}>
            {children}
        </StudentContext.Provider>
    )
}
