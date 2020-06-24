import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const [users, setUser] = useState([]);
    
    useEffect(() => {
     loadUsers();
 },[]);
    
const loadUsers = async() => {
    const result = await axios.get("http://localhost:3002/users");
   setUser(result.data);
    //document.write(result);
} 

const deleteuser = async id => {
await axios.delete(`http://localhost:3002/users/${id}`);
alert("Are Sure You want to delete the Records")

loadUsers();

}
    
    return (
        <div className = "container"> 
        <div className = "py-4">
            <h1>
                HomePage
            </h1>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.map((user, index) => (
              <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td><Link class="btn btn-primary mr-2" to = {`/users/${user.id}`}>View</Link>
              <Link class="btn btn-outline-primary mr-2" onClick={() => deleteuser(user.id)}>Delete</Link>
              <Link class="btn btn-primary" to = {`/users/edit/${user.id}`}>Edit</Link>

                           
              </td>

        
              </tr>

          )
          )
      }
    
  </tbody>
</table>
            </div>
           </div>

        
            
        
    )
}

export default Home;
