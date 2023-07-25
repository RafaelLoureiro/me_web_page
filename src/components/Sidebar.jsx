import React from 'react';
import Avatrar from '../img/profile-img.jpg';
import '../styles/components/sidebar.sass';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './informationContainer';


const Sidebar = () => {
    return (
        <aside className='sideBar'>
            <img src={Avatrar} alt='Rafael Loureiro' />
            <p className='title'>Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="https://drive.google.com/file/d/1lBmVdJaZ83Qzw6t7Ewfm9rzwpvSCh-H7/view?usp=sharing" className='btn'>
                Download Currículo
            </a>
        </aside>
    );
}

export default Sidebar