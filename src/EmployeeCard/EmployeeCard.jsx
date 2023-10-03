import React from 'react'
import './EmployeeCard.css';
import Button from '../Button/Button.jsx';

export default function EmployeeCard({ employee }) {
    const { firstName, lastName, email, about, jobTitle, favoriteColor, _id } = employee;
    const fullName = `${firstName} ${lastName}`;
    const imgLink = `https://randomuser.me/api/portraits/${_id % 2 === 0 ? 'women' : 'men'}/${_id}.jpg`;

    const onButtonClick = () => {
        window.location.href = `mailto:${email}`;
    }

    const imgBorderStyle = {
        border: `5px solid ${favoriteColor}`,
    }

    const buttonStyle = {
        "background-color": `${favoriteColor}`,
    }

    return (
        <div className="card">
            <div className="imgContainer" style={imgBorderStyle}>
                <img src={imgLink} alt="the best employee" />
            </div>

            <div>
                <div className="name">{fullName}</div>
                <div className="jobTitle">{jobTitle}</div>
            </div>

            <div className="quoteWrap">
                <div className="quote">
                    {about}
                </div>
            </div>

            <Button name="Contact me" style={buttonStyle} onClick={onButtonClick} className="button" />
        </div>
    )
}
