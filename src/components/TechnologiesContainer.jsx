import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiGit,
  DiScrum,
  DiBootstrap,
  DiDatabase,

} from 'react-icons/di';
import '../styles/components/technologiescontainer.sass';

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
  { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
  { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
  { id: 'database', name: 'Database', icon: <DiDatabase /> },
  { id: 'react', name: 'React', icon: <DiReact /> },
  { id: 'sass', name: 'Sass', icon: <DiSass /> },
  { id: 'git', name: 'Git', icon: <DiGit /> },
  { id: 'scrum', name: 'Scrum', icon: <DiScrum /> },
  { id: 'bootstrap', name: 'Bootstrap', icon: <DiBootstrap /> },
];


const TechnologiesContainer = () => {
  return (
    <section className='technologies-Container'>
      <h2>Tecnologias</h2>
      <div className='technologies-Grid'>
        {technologies.map((tech) => (
          <div className='technologies-Card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className='technologies-Info'>
              <h3>{tech.name}</h3>
              <p>bla bla bla bla bla blabla bla blabla bla blabla bla blabla bla bla
                bla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla
                bla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer