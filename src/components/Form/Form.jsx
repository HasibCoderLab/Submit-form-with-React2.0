import React from 'react'

const Form = () => {
    return (
        <div>

            <form className="bg-sky-700 p-10 space-y-3 ">
                <input type="text" placeholder="Name" name='text' className="block w-full p-2 border border-gray-300 " />
                <input type="password" placeholder="Password" name='password' className="block w-full p-2 border border-gray-300" />
                <input type="email" placeholder="Email " name='email' className="block w-full p-2 border border-gray-300 rounded" />

                <input type="submit" value="submit" className="block w-full p-2 border bg-blue-950 border-gray-300 rounded-3xl  cursor-pointer " />
            </form>

        </div>
    )
}

export default Form