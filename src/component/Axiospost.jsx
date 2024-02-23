import axios from "axios"
import { useState } from "react";

const Axiospost = () => {
    const [post, setPost] = useState({
        name: '',
        age: ''
    })
    const handleInput = (event) =>{
        setPost({...post, [event.target.name]: event.target.value})
    }
    function handleSubmit(event){
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', {post})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
  return (
		<form onSubmit={handleSubmit}>
			name: <input type="text" onChange={handleInput} name="name" style={{ backgroundColor: "red" }} />
			<br />
			age: <input type="number" onChange={handleInput} name="age" style={{ backgroundColor: "red" }} />
            <input type="submit" value="submit" />
		</form>
	);
}

export default Axiospost