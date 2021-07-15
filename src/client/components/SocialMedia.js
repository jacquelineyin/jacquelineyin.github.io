import React from "react";
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { GITHUB, LINKEDIN } from "../constants/SocialMediaTypes";
import "./SocialMedia.css";

export const SocialMedia = () => {
    let socialMedias = {
        github: "https://github.com/jacquelineyin",
        linkedin: "https://www.linkedin.com/in/jacqueline-yin/",
    }

    return (
        <div className="container icons">
            {getIcons(socialMedias)}
        </div>
    );
};

const getIcons = (socialMedias) => {
    const types = Object.keys(socialMedias);

    let icons = types.map((type) => {
        return getIcon(type, socialMedias[type]);
    })

    return icons;
}

const getIcon = (type, link) => {
    switch (type) {
        case GITHUB:
            return <GithubOutlined className="icon" key={type} onClick={() => openLink(link)} />;
        case LINKEDIN:
            return <LinkedinOutlined className="icon" key={type} onClick={() => openLink(link)} />;
        default:
            return null;
    }
}

const openLink = (link) => {
    let newWindow = window.open(link, "_blank", "noopener,noreferrer");
    newWindow.opener = null;
}
