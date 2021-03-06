import React from 'react';
import './FooterAA.css'


const FooterAA = ({ linkedin, github, phone }) => {

    return (
        <div className="containerFootAA">
            <p className="contactAA">Contact</p>
            <a className="linksAA" href={linkedin}>LinkedIn</a><br/>
            <a className="linksAA" href={github}>gitHub</a>
            <p className="linksAA" >{phone}</p>
        </div>
    )
}

export default FooterAA;