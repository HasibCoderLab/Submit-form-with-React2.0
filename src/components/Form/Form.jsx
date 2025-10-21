import React, { useState } from 'react'

const Form = () => {
    // =  =useState
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const  [error , setError] = useState("");

    //   Function
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (pass.length < 9) {
             setError("Password must be 9 char");
        }else{
            setError("");
            console.log(name);
            console.log(email);
            console.log(pass);
            
            
        }
    }
    return (
        <div>

            <form onSubmit={handleSubmitForm}
                className="bg-sky-700 p-10 space-y-3 ">
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" name='text' required
                    className="block w-full p-2 border border-gray-300 " />
                <input onChange={(e) => setEmail(e.target.value)} type="password" placeholder="Password" name='password' required
                    className="block w-full p-2 border border-gray-300" />
                <input onChange={(e) => setPass(e.target.value)} type="email" placeholder="Email " name='email' required
                    className="block w-full p-2 border border-gray-300 rounded" />

                <input type="submit" value="submit"
                    className="block w-full p-2 border bg-blue-950 border-gray-300 rounded-3xl  cursor-pointer " />
                    <p> {error} </p>
            </form>

        </div>
    )
}

export default Form