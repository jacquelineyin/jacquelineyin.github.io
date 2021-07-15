import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");


    return (
        <div id="contact">
            <div className="col contact-container">
                <input
                    type="text"
                    className="inputFlds"
                    name="name"
                    placeholder="Your name."
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                    type="text"
                    className="inputFlds"
                    name="email"
                    placeholder="Your email."
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <textarea
                    className="inputFlds"
                    name="message"
                    placeholder="Your message."
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
        </div>
    );
}

const handleSubmit = (e) => {
    console.log(e.target.value);
}
