import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
    const [data, setData] = useState({})
    const navigate = useNavigate()

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">Enter student name : </div>
                    <div className="col">
                        <input type="text" onChange={(e) => {
                            setData({ ...data, name: e.target.value })
                        }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">Enter student rollno : </div>
                    <div className="col">
                        <input type="text" onChange={(e) => {
                            setData({ ...data, rollno: e.target.value })
                        }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">Enter student age : </div>
                    <div className="col">
                        <input type="text" onChange={(e) => {
                            setData({ ...data, age: e.target.value })
                        }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">Enter student email : </div>
                    <div className="col">
                        <input type="text" onChange={(e) => {
                            setData({ ...data, email: e.target.value })
                        }} />
                    </div>
                </div>
                
                <div className="">
                    <button className="btn" onClick={() => {
                        const apiUrl = "http://localhost:3001/students"
                        fetch(apiUrl, {
                            method: "post",
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then(res => res.json())
                            .then(res => {
                                navigate("/students")
                            })
                    }}>Add</button>
                </div>
            </div>
        </>
    )
}

export default AddStudent;