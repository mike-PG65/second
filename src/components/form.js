import React, {useState} from 'react';



function MyApp(){

    const [formData, setformData]= useState({
        firstName:'',
        secondName:'',
        email:'',
        password:''
    });

    // const [error, setError] = useState('');



    const handleChange=(event)=>{
            const{ name, value } = event.target
            setformData({
                ...formData,
                [name]: value
            });
        };

        const handleSubmit=(event)=>{
            event.preventDefault()

            alert(`Welcome, ${formData.firstName} ${formData.secondName}!`)
        };


        return(
            <div className='App'>
                <h2> Registration Form </h2>
                <form onSubmit={handleSubmit}>
                   
                    <input
                    type="text"
                    id= "name"
                    name="firstName"
                    value= {formData.firstName}
                    onChange={handleChange}
                    placeholder='First Name'
                    />

                    <input 
                    type="text"
                    id="SecondName"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    placeholder='Second Name'
                    />


                    <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your Email'
                    />

                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    />

                      <button> Submit </button>
                    </form>

            </div>
          
        )



    }
    


export default MyApp;
