import React from "react";
import PropTypes from "prop-types";
import "./card.css";

function CharacterCard({ imageSource, logo}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} alt="a wallpaper" className="card-img-top" />
                <img src={logo} alt="a wallpaper" className="card-img-bottom" />
            </div>
        </div>
    );
}

CharacterCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    logo: PropTypes.string,
    imageSource: PropTypes.string
};

export default CharacterCard;