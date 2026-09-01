// Here will be created the main logics of the Student Manager App

import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({children}){

    const [students, setStudents] = useState([])
    const [currentId, setCurrentId] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        birthday: "",
        nation: "",
        gender: "",
        grades: []
    })
     // CRUD functions

     function AddStudent(){
        const newStudent = {
            id: Date.now(),
            name: formData.name,
            surname: formData.surname,
            birthday: formData.birthday,
            nation: formData.nation,
            gender: formData.gender,
            grades: formData.grades
        }

        setFormData([...newStudent, students]);

        setFormData({
            name: "",
            surname: "",
            birthday: "",
            nation: "",
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
            birthday: formData.birthday,
            nation: formData.nation,
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
            birthday: "",
            nation: "",
            gender: "",
            grades: []
        })
     }


     

    return (
        <StudentContext.Provider value={{
            students,
            AddStudent,
            DeleteStudent,
            EditStudent,
            SaveStudent
        }}>
            {children}
        </StudentContext.Provider>
    )
}
