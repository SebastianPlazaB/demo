import Search from "../Search/Search";
import DataTable from "../DataTable/DataTable";
import Form from "../Form/Form";
import { useState } from "react";

export default function () {

    const [users, setUsers] = useState([

        {
            id: 1,
            name: "Juan",
            color: "Rojo"

        }
    ]);
 
    const [filteredUser, setFilteredUser] = useState(null);

    const searchUser = (query) =>{

        if (query !== ""){

            const fUsers = users.filter((user) => {
            const name = user.name.trim().toLowerCase();
            const q = query.trim().toLowerCase();
            return name.includes(q) || name.includes(q);   

            });

            setFilteredUser(fUsers);
        }   else {

                setFilteredUser(null);

        }

    };

    const addUser = (user) => {

        user.id = users.length + 1;
        console.log(user)
        setUsers(users.concat(user));

    };

    const deleteUser = (userId) => {

        setUsers(users.filter((user) => user.id !== userId));
      };
    

    return (

        <>

            <div>Visitor Log</div>
            <Search onSearch = {searchUser} />
            <DataTable users = {filteredUser || users} onDelete = {deleteUser} />
            <Form onSubmit = {addUser}/>


        </>

    );

}