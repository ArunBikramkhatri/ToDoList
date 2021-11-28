import React from "react";

function Tutorial()
{
    let date = new Date();
    const hours = date.getHours();
    let time;

    if(hours < 12){
        time = "Morinig"

    }
    else if(hours<18){
        time = "Afternoon"
    }
    else{
        time = "Night"
    }
const styles = {
    color : "red",
    fontSize : "50vh"
};
    return(
        <p style= {styles}>Good {time}</p>
    )

}

export default Tutorial;