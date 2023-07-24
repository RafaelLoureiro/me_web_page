import React from 'react'
import "../styles/components/maincontent.sass";
import AboutContainer from './AboutContainer';
import TechnologiesContainer from './TechnologiesContainer';
import ProjectsContainer from './ProjectsContainer';

const MainContent = () => {
    return (
        <main className='main-Content' >
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    )
};

export default MainContente