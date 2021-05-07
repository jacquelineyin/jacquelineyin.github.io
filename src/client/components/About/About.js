import React from "react";
import "./About.css";
import { SocialMedia } from "../SocialMedia";
import { Description } from "./Description";

export const About = () => {
    return (
        <div id="about">
            <div class="col introduction-container">
                <Description />
                <SocialMedia />
            </div>
        </div>
    )
}