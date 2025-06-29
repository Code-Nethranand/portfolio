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
      tags: ['Django', 'OpenWeatherMap API', 'Google Maps Integration'],
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
            
            {/* Mobile: Single row with horizontal scroll */}
            <div className="md:hidden reveal-up">
                {/* Scroll indicator */}
                <div className="flex justify-between items-center mb-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <span>Scroll to see more projects</span>
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>

                {/* Horizontal scrollable container */}
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-4 min-w-max px-4">
                        {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                            <div key={key} className="flex-shrink-0 w-80">
                                <ProjectCard
                                    imgSrc={imgSrc}
                                    title={title}
                                    tags={tags}
                                    projectLink={projectLink}
                                    classes="reveal-up"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator at bottom */}
                <div className="flex justify-center mt-4">
                    <div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                        <span>← Swipe to explore →</span>
                    </div>
                </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard
                        key={key} 
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work