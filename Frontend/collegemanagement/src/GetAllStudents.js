import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function GetAllStudents() {


    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = "http://localhost:3001/students"
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    const formatedStudent = data.map((stu) => {
        return (<>
            <tr>
                <td>{stu.name}</td>
                <td>{stu.rollno}</td>
                <td className="btn"><Link to={'/students/' + stu.rollno}>Details</Link></td>
            </tr>
        </>)
    })


    return (
        <table className="table">
            {formatedStudent}
        </table>
    );



}

export default GetAllStudents;  