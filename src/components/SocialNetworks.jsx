import React from 'react';
import '../styles/components/socialnetworks.sass';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const socialNetworks = [

    { name: 'linkedin', link: 'https://www.linkedin.com/in/rafael-l-de-melo-724a91248/', icon: <FaLinkedinIn /> },
    { name: 'github', link: 'https://github.com/RafaelLoureiro', icon: <FaGithub /> },

];

export const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>

    )
}

export default SocialNetworks;