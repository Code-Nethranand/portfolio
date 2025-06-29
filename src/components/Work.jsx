import ProjectCard from "./ProjectCard"

const works = [
    {
      imgSrc: '/images/project-1.png',
      title: 'Chat Sphere - Chat app',
      tags: ['MERN', 'Socket.io', 'TailwindCSS'],
      projectLink: 'https://github.com/Code-Nethranand/chat-sphere'
    },
    {
      imgSrc: '/images/project-2.png',
      title: 'PunarEval',
      tags: ['Cashfree API', 'Load Balancing', 'Rate Limiting'],
      projectLink: 'https://github.com/Code-Nethranand/punareval'
    },
    {
      imgSrc: '/images/project-3.png',
      title: 'Ai Mock Interview',
      tags: ['Next.js', 'Google Gemini AI', 'Drizzle ORM'],
      projectLink: 'https://github.com/Code-Nethranand/ai-mock-interview-app'
    },
    {
      imgSrc: '/images/project-4.png',
      title: 'Portfolio Website',
      tags: ['React.js', 'Tailwind CSS', 'GSAP'],
      projectLink: 'https://nethranand-portfolio.vercel.app/'
    },
    {
      imgSrc: '/images/project-5.png',
      title: 'Indra Cast',
      tags: ['Django', 'OpenWeatherMap API', 'Map Integration'],
      projectLink: 'https://github.com/Code-Nethranand/indra_cast'
    },
    {
      imgSrc: '/images/project-6.png',
      title: 'Desktop Voice Assistant',
      tags: ['Python', 'Speech Recognition', 'Text-to-Speech'],
      projectLink: 'https://github.com/Code-Nethranand/desktop-voice-assistant'
    },
    {
      imgSrc: '/images/project-7.png',
      title: 'Sign Language Detector',
      tags: ['Machine Learning', 'OpenCV', 'MediaPipe'],
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
            <h2 className="headline-2 mb-6 md:mb-8 reveal-up">
                My portfolio highlights
            </h2>
            <div className="grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3"
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