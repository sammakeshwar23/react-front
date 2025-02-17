import React, { useEffect, useState } from "react";
import axios from "axios";

const Company = () => {
    const [companies,setCompanies]= useState([]);


    useEffect(()=>{
            fetchCompanies()
        },[])

        const fetchCompanies = () => {
            axios.get("http://localhost:5000/companies").then((res)=>
            setCompanies(res.data)).catch((error)=>console.log(error))
        }

        const handleDelete = async(id) => {
            try {
                if(window.confirm("Are you sure ,you want to delete")){
                    await axios.delete("http://localhost:5000/companies/"+ id)
                    const filterCompany = companies.filter((company)=> company._id !== id )
                    console.log(filterCompany)
                    setCompanies(companies.filter((company)=> company._id !== id ))
                    alert("company deleted successfully")
                }
               
            } catch (error) {
                console.log(error)
            }
        };

    return (
        <>
            <div>
                <h2>Comapny List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company)=>(
                            <tr key={company._id}>
                                <td>{company._id}</td>
                                <td>{company.name}</td>
                                <td>{company.city}</td>
                                <td>
                                    <button onClick={()=>handleDelete(company._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Company;