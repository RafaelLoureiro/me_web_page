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
  {
    id: 'html',
    text: "Linguagem de marcação, componente base da web, permite estruturamento de websites e inserção de novos conteúdos.",
    name: 'HTML5', icon: <DiHtml5 />
  },
  {
    id: 'css',
    text: "Linguagem que permite apresente, de maneira estruturada, um documento que feito em linguagem de marcação, especialmente usada no design visual",
    name: 'CSS3', icon: <DiCss3 />
  },
  {
    id: 'js',
    text: "Uma linguagem de programação de alto nível criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web.",
    name: 'JavaScript', icon: <DiJsBadge />
  },
  {
    id: 'node',
    text: "Node é um runtime, que nada mais é do que um conjunto de códigos, API's, são bibliotecas responsáveis pelo tempo de execução como um interpretador de JavaScript .",
    name: 'Node.js', icon: <DiNodejsSmall />
  },
  {
    id: 'database',
    text: "Projetado para armazenamento, recuperação e gerenciamento de informações orientadas a documentos, maneira de armazenar dados no formato JSON",
    name: 'Database', icon: <DiDatabase />
  },
  {
    id: 'react',
    text: "Biblioteca JavaScript robusta usada no desenvolvimento dinâmico de aplicativos da web. Ele torna a programação em JavaScript.",
    name: 'React', icon: <DiReact />
  },
  {
    id: 'sass',
    text: "Linguagem de extensão do CSS, folhas de estilo com uma sintaxe incrível, adicionar recursos especiais para estilização.",
    name: 'Sass', icon: <DiSass />
  },
  {
    id: 'git',
    text: " Um sistema de versionamento permite que várias pessoas trabalhem no mesmo conjunto de arquivos (repositório) ao mesmo tempo em que evita conflitos entre as alterações.",
    name: 'Git', icon: <DiGit />
  },
  {
    id: 'scrum',
    text: " Framework de gerenciamento que as equipes usam para se auto-organizar e trabalhar em direção a um objetivo em comum.",
    name: 'Scrum', icon: <DiScrum />
  },
  {
    id: 'bootstrap',
    text: "Framework CSS para ser utilizado no front-end de aplicações web. Ele utiliza JavaScript e CSS para estilizar as páginas e adicionar funcionalidades.",
    name: 'Bootstrap', icon: <DiBootstrap />
  },
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
              <p>{tech.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer