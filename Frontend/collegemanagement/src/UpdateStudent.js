import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const {rollno} = useParams()

    useEffect(()=>{
        const apiUrl = "http://localhost:3001/students/" + rollno;
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
    } , [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">Enter student name : </div>
                    <div className="col">
                        <input type="text" value={data.name} onChange={(e) => {
                            setData({ ...data, name: e.target.value })
                        }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">Enter student rollno : </div>
                    <div className="col">
                        <input type="text" value={data.email} onChange={(e) => {
                            setData({ ...data, rollno: e.target.value })
                        }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">Enter student age : </div>
                    <div className="col">
                        <input type="text" value={data.email} onChange={(e) => {
                            setData({ ...data, age: e.target.value })
                        }} />
                    </div>
                </div>        
                <div className="row">
                    <div className="col-3">Enter student email : </div>
                    <div className="col">
                        <input type="text" value={data.email} onChange={(e) => {
                            setData({ ...data, email: e.target.value })
                        }} />
                    </div>
                </div>
                
                <div className="">
                    <button className="btn" onClick={() => {
                        const apiUrl = "http://localhost:3001/students" + id;
                        fetch(apiUrl, {
                            method: "patch",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => {
                                navigate("/students")
                            })
                    }}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default UpdateStudent;