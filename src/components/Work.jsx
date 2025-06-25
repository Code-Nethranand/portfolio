
import ProjectCard from "./ProjectCard"

const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'Chat Sphere - Chat app',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://github.com/Code-Nethranand/chat-sphere'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'PunarEval',
      tags: ['API', 'SPA'],
      projectLink: 'https://github.com/Code-Nethranand/punareval'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'Ai Mock Interview',
      tags: ['Development', 'API'],
      projectLink: 'https://github.com/Code-Nethranand/ai-mock-interview-app'
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'Portfolio Website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Code-Nethranand/portfolio'
    },
    {
      imgSrc: '/images/project-5.png',
      title: 'Indra Cast',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/Code-Nethranand/indra_cast'
    },
    {
      imgSrc: '/images/project-6.png',
      title: 'Desktop Voice Assistant',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Code-Nethranand/desktop-voice-assistant'
    },
    {
      imgSrc: '/images/project-7.png',
      title: 'Sign Language Detector',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/Code-Nethranand/sign-language-detector'
    },
];

const Work = () => {
  return (
    <section
        id="work"
        className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
            >
              {
              works.map(({ imgSrc, title, tags, projectLink }, key) => 
                (
                  <ProjectCard
                    key={key} 
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                  />
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default Work