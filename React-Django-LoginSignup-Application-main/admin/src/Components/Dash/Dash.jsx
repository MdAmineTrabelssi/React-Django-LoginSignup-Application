import React from "react";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { getUsers, searchUser } from "../../utils/Constants";
import Swal from "sweetalert2";
import { deleteUser } from "../../utils/Constants";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchkey, setSearchkey] = useState([""])
  useEffect(() => {
    getUsersList();
  },[users] ); 

  const getUsersList = () => {
    axios
      .get(getUsers)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUserBtn = (id) => {
    Swal.fire({
      title: `Are you sure? to delete ${id}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${deleteUser}/${id}`)
          .then((res) => {
            getUsersList();
            console.log(res);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((err) => {
            Swal.fire(
              "Not Deleted!",
              "Some Error."
            );
          });
      }
    });
  };
  const searchBy = (e) => {
    e.preventDefault()
    let key = searchkey;
    console.log("key",key)
    // if (!key) {
    //   getUsersList();
    // } else 
      axios
        .get(`${searchUser}/${key}/`)
        .then((response) => {
          console.log("searchRESPONSE",response.data);
          setUsers(response.data.users);
        })
        .catch((err) => {
          console.log(err);
        });
  };
  return (
    <div>
      <div className="search-bar">
        <form onSubmit={searchBy} action="">
        <input
          value={searchkey}
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
          onChange = {(e) =>setSearchkey(e.target.value)}
        />
        <button type="submit" className="">search</button>
        </form>
      </div>
      <table className="table table-bordered  " id="myTable">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
        {users.map((obj, index) => ( 
          <tr key={obj.id}>
            <td>{index + 1}</td>
            <td>{obj.username}</td>
            <td>{obj.email}</td>
            <td>
              <button
                type="button"
                onClick={() => deleteUserBtn(obj.id)}
                className="btn badge rounded-pill bg-danger"
              >
                Delete
              </button>
            </td>
            <td>
              <button
                type="button"
                onClick={() => navigate(`/userUpdatePage/${obj.id}`)} 
                className="btn badge rounded-pill bg-secondary"
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;

