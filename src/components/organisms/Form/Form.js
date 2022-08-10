import { useState } from "react";
import Button from "../../atoms/Button/Button";
import Labeledinput from "../../molecules/Labeledinput/Labeledinput";

export default function({onSubmit}){

    const [name, setName] = useState();
    const [color,setColor] = useState ();

    const handleSubmit = () => {


        onSubmit ({

            name: name,
            color: color


        });
        setName("");
        setColor("");

    }

    return(

        <div>
            <Labeledinput label="Name" value={name} onChange= {setName}/>
            <Labeledinput label = "Favorite color" value={color} onChange = {setColor}/>
            <Button onClick = {() => handleSubmit()} text = "Agregar"/>

        </div>
    )

}