import React, { useState } from 'react'
import './PetAdoptionForm.css'

const Form = () => {
    const [data, setData] = useState({
        petname: '',
        petoption: 'dog', // Set default value
        name: '',
        email: '',
        phone: '',
    })

    const [tableData, setTableData] = useState([])
    const [showTable, setShowTable] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // Add basic form validation
        if (!data.petname || !data.name || !data.email || !data.phone) {
            alert('Please fill in all required fields');
            return;
        }
        
        setTableData([...tableData, data])
        // Reset form after submission
        setData({
            petname: '',
            petoption: 'dog',
            name: '',
            email: '',
            phone: ''
        })
        setShowTable(true)
    }

    const handleGoBack = () => {
        setShowTable(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className="pet-adoption-container">
            <div className="form-header">
                <h1>Pet Adoption Form</h1>
            </div>
            
            {!showTable ? (
                <form 
                    className="pet-adoption-form" 
                    onSubmit={handleFormSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="petname">Pet Name</label>
                        <input 
                            type="text" 
                            name="petname" 
                            id="petname" 
                            value={data.petname}
                            onChange={handleInputChange} 
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="petoption">Pet Type</label>
                        <select 
                            name="petoption" 
                            id="petoption" 
                            value={data.petoption}
                            onChange={handleInputChange}
                        >
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="bird">Bird</option>
                            <option value="rabbit">Rabbit</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            name="name"
                            id="name" 
                            value={data.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            id="email" 
                            value={data.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="phone">Phone No.</label>
                        <input 
                            type="tel" 
                            name="phone"
                            id="phone" 
                            value={data.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="submit-btn">
                        Submit Adoption Form
                    </button>
                </form>
            ) : (
                <div className="table-view">
                    <table className="pet-adoption-table">
                        <thead>
                            <tr>
                                <th>Pet Name</th>
                                <th>Pet Type</th>
                                <th>Adopter Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((rowData, index) => (
                                <tr key={index}>
                                    <td>{rowData.petname}</td>
                                    <td>{rowData.petoption}</td>
                                    <td>{rowData.name}</td>
                                    <td>{rowData.email}</td>
                                    <td>{rowData.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    <button 
                        className="go-back-btn" 
                        onClick={handleGoBack}
                    >
                        Go Back
                    </button>
                </div>
            )}
        </div>
    )
}

export default Form