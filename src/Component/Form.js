import React, { useState } from "react";

function Form() {
  const [firstName, setfirstName] = useState("");
  const [editFirstName, setEditFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editName, seteditName] = useState(false);
  const [updateCheck, setupdateCheck] = useState(true);
  const [editableName, seteditableName] = useState(false);
  const [isemptyFirstName, setisemptyFirstName] = useState(false);
  const [isemptyLastName, setisemptyLastName] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Towfeeque",
      lastName: "Ahmed",
    },
    {
      id: 2,
      firstName: "Ambrin",
      lastName: "Ahmed",
    },
  ]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (firstName === "" && lastName === "") {
      setisemptyFirstName(true);
      setisemptyLastName(true);
    } else if (firstName === "") {
      setisemptyFirstName(true);
    } else if (lastName === "") {
      setisemptyLastName(true);
    } else {
      console.log("button clicked value of firstName is " + firstName);
      setUsers([...users, { id: users.length + 1, firstName, lastName }]);
      setfirstName("");
      setlastName("");
      setisemptyFirstName(false);
      setisemptyLastName(false);
    }
  };
  const deleteUser = (selectedUser) => {
    console.log("delet button clicked of this user " + selectedUser.id);
    // const filterUsers = users.filter((user) => user !== selectedUser);
    setUsers(users.filter((user) => user !== selectedUser));
  };

  const editUser = (user, index) => {
    console.log(index);
    seteditableName(index);
    seteditName(true);
    setEditFirstName(users[index].firstName);
    setEditLastName(users[index].lastName);
  };
  const updateUser = (user, index) => {
    seteditName(false);
    setupdateCheck(false);
    seteditableName(false);
    users[index].firstName = editFirstName;
    users[index].lastName = editLastName;
    setUsers(users);
  };
  //   const deleteUser = () => {};

  return (
    <div>
      <div id="formDesign1">
        <form onSubmit={handleSubmit} id="formDesign">
          <div id="firstBoxStyle">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            ></input>
            <br></br>
            <span>
              {isemptyFirstName ? (
                <span className="danger">* First Name is required</span>
              ) : null}
            </span>
          </div>

          <div id="firstBoxStyle">
            <label htmlFor="lastName">Last Name</label>

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            ></input>
            <br></br>

            <span>
              {isemptyLastName ? (
                <span className="danger">* Last Name is required</span>
              ) : null}
            </span>
          </div>
          <div>
            <button class="button">Add User</button>
          </div>
        </form>

        <hr></hr>

        {/* <TableDisplay firstName={firstName} lastName={lastName} /> */}
        <table>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>

              {index !== editableName ? (
                <>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                </>
              ) : (
                <>
                  <td>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="editFirstName"
                      id="editFirstName"
                      value={editFirstName}
                      onChange={(e) => setEditFirstName(e.target.value)}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="editLastName"
                      id="editLastName"
                      value={editLastName}
                      onChange={(e) => setEditLastName(e.target.value)}
                    ></input>
                  </td>
                </>
              )}

              {editName && index === editableName ? (
                <td>
                  <button onClick={() => updateUser(user, index)}>
                    {" "}
                    Update
                  </button>
                </td>
              ) : (
                <td>
                  <button onClick={() => editUser(user, index)}>Edit</button>
                </td>
              )}
              <td>
                <button onClick={() => deleteUser(user)}>Delete</button>
                {/* <button onClick={deleteUser(user)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Form;
