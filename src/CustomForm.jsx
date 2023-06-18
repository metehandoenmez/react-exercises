import React, {useState} from "react";

export const useForm = () => {
    const [data, setData] = useState({username:"", password:""});

    const handleInput = (event) => {
        setData((arr) => ({...arr, [event.target.name]: event.target.value}))
    }


    return { data, handleInput}

}

export default function CustomForm() {

    const { data, handleInput} = useForm()
    

    return (
        <form onSubmit={(event) => {
            console.log(`Form Submitted with username ${data.username} and password ${data.password}.`);
            event.preventDefault()
            }}>
          <div>
            <p>Username</p>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={data.username}
              onChange={handleInput}
            />
          </div>
          <br />
          <div>
            <p>Password</p>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleInput}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      )
}