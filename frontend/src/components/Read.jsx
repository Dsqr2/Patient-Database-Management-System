import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Read = () => {

    const [data, setData] = useState();
    const [error, setError] = useState("");

    async function getData(){
        const response = await fetch("http://localhost:5000");

        const result = await response.json();

        if(!response.ok)
        {
            console.log(result.error);
            setError(result.error);
        }
    
        if(response.ok)
        {
            setData(result);
        }    
    }
    
    const handleDelete = async (id)=> {
        const response = await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE",
        });

        const result = await response.json();
        
        if(!response.ok)
        {
            console.log(result.error);
            setError(result.error);
        }

        if(response.ok)
        {
            setError("Deleted Sucessfully");    
        }

        setTimeout(() => {
            setError("");
            getData();
        }, 1000);

    }

    useEffect(() => {
      getData();
    }, []);
    
    console.log(data);

    
  return (
    <div className = "container my-2">
        {error && <div className="alert alert-danger">{error}</div>}
        <h2 className = "h1 text-center h1-custom">Show All Patients Details</h2>

        <div className = "row">
            {data?.map((ele) => {
                return (
                    <div key = {ele._id} className = "col-3 custom-card-col3">
                    <div className = "card">
                        <div className = "card-body">
                            <h6 className = "card-subtitle mb-2 text-muted">{ele.aadhar}</h6>
                            <h5 className = "card-title">{ele.name}</h5>
                            <h6 className = "card-subtitle mb-2 text-muted">{ele.email}</h6>
                            <h6 className = "card-subtitle mb-2 text-muted">{ele.mobile}</h6>
                            <Link to={`/${ele._id}`} className = "card-link">Edit</Link>
                            <a href="#" className = "card-link" onClick={() => handleDelete(ele._id)}>Delete</a>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
     </div>
  )
}

export default Read

