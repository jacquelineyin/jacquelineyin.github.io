import React from "react";
import "./About.css";
import { SocialMedia } from "../SocialMedia";
import { Description } from "./Description";

export const About = () => {
    return (
        <div id="about">
            <div className="col introduction-container">
                <Description />
                <SocialMedia />
            </div>
        </div>
    )
}