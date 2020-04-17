import React from 'react';
import Skills from './Skills';
import Socials from './Socials';
import { Link } from 'gatsby';
import Avatar from '../Avatar';

const CardProfile = ({
    profile,
    path,
    full_name,
    profession,
    skills,
    avatar,
    socials,
}) => {
    return (
        <div className="card-profile">
            <Link to={path}>
                <div className="img-avatar">
                    <Avatar title={profile} {...{ avatar }} />
                </div>
                <p className="card-fullname">{full_name}</p>
                <p className="card-profession">{profession}</p>
            </Link>
            <Skills {...{ skills }} />
            <div className="card-control">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={path}>
                        <button className="btn btn-connect">Connect</button>
                    </Link>
                    <Socials {...{ socials }} />
                </div>
            </div>
        </div>
    );
}


export default CardProfile;