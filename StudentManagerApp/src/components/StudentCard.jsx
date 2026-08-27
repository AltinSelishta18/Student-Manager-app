function StudentCard({student}) {

    return (
        <div>
            <p>{student.name}</p>
            <p>{student.surname}</p>
            <p>{student.birthday}</p>
            <p>{student.nation}</p>
            <p>{student.gender}</p>
            <p>{student.grades}</p>
        </div>
    )

}

export default StudentCard