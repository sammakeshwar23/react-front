import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
    const [companies,setCompanies]= useState([]);
    const [users,setUsers] = useState([]);
    const [selectedUser,setSelectedUser] = useState(null);
    const [selectedCompanies,setSelectedComapnies] = useState(null);

    useEffect(()=>{
        fetchCompanies()
        fetchUsers()

    },[])

    const fetchCompanies = () => {
        axios.get("http://localhost:5000/companies").then((res)=>
        setCompanies(res.data)).catch((error)=>console.log(error))
    }

    const fetchUsers = () => {
        axios.get("http://localhost:5000/users").then((res)=>
            setUsers(res.data)).catch((error)=>console.log(error))
    }

    const allocateUser = () => {
        console.log(selectedUser)
        if(selectedUser && selectedCompanies.length === 0){
            alert("Please select user and at least one company")
        }else{
            axios.post("http://localhost:5000/allocate-user",{
                userId: selectedUser,
                companyId: selectedCompanies
            }).then((res)=>
               alert("User allocated successfully")).catch((error)=>console.log(error))
        }
    }

    return(
        <div>
            <h1>Users Comapny Management</h1>
            <h2>Select Users</h2>
            <select onChange={(e)=>setSelectedUser(e.target.value)}>
                <option>Select User</option>
                    {users.map((data)=>(
                        <option value={data._id}>{data.name}</option>
                    ))}
            </select>

            <h2>Select companies</h2>
            <select onChange={(e)=>setSelectedComapnies(e.target.value)}>
                <option value="">Select a company</option>
                {companies.map((comapny)=>(
                    <option key={comapny._id} value={comapny._id}>{comapny.name}</option>
                ))}
            </select>
            <br/>
            <button  onClick={allocateUser}>Allocate User</button>
        </div>
    )
}

export default Users;