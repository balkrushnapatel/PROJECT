
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function GetStudentByID() {
    const [data, setData] = useState({});
    const { rollno } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const apiUrl = "http://localhost:3001/students" + rollno;
        fetch(apiUrl, { method: "get" })
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    return (
        <>
            <table>
                <Link to='/students' className="btn">Back</Link>
                <tr>
                    <td>Student name : </td>
                    <td>{data.name}</td>
                </tr>
                <tr>
                    <td>Student rollno :</td>
                    <td>{data.rollno}</td>
                </tr>
                <tr>
                    <td>Student age :</td>
                    <td>{data.age}</td>
                </tr>
                <tr>
                    <td>Student email : </td>
                    <td>{data.email}</td>
                </tr>

            </table>

            <button className="btn" onClick={() => {
                const apiUrl = "http://localhost:3001/students" + rollno;
                fetch(apiUrl, { method: "delete" })
                    .then(res => res.json())
                    .then(res => {
                        navigate("/students")
                    })

            }}></button>
        </>
    )

}

export default GetStudentByID;