import React from "react"

function ContactCard(props) {
    return (
        <div>
            <img scr={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
    )
}

