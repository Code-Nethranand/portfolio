import SkillCard from "./SkillCard" 

const skillItem = [
    // Programming Languages (Core)
    {
      imgSrc: '/images/html5.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
      label: 'HTML',
      desc: 'Markup Language',
      iconLink: 'https://www.flaticon.com/free-icons/html'
    },
    {
      imgSrc: '/images/css3.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/python.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: '/images/cpp.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
      label: 'C/C++',
      desc: 'Programming Language'
    },

    // Frontend Frameworks & Libraries
    {
      imgSrc: '/images/react.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/nextjs.png',
      fallbackImg: '',
      label: 'Next.js',
      desc: 'React Framework'
    },
    {
      imgSrc: '/images/tailwind.png',
      fallbackImg: '',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },

    // Backend & Server Technologies
    {
      imgSrc: '/images/nodejs.png',
      fallbackImg: '',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/express.png',
      fallbackImg: '',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },

    // Databases
    {
      imgSrc: '/images/sql.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
      label: 'SQL',
      desc: 'Database Query'
    },
    {
      imgSrc: '/images/mongodb.png',
      fallbackImg: '',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/mysql.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/528/528260.png',
      label: 'MySQL',
      desc: 'Database'
    },
    {
      imgSrc: '/images/postgresql.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png',
      label: 'PostgreSQL',
      desc: 'Database'
    },

    // Data Analysis & Visualization
    {
      imgSrc: '/images/pandas.png',
      fallbackImg: '',
      label: 'Pandas',
      desc: 'Data Analysis'
    },
    {
      imgSrc: '/images/numpy.png',
      fallbackImg: '',
      label: 'NumPy',
      desc: 'Data Analysis'
    },
    {
      imgSrc: '/images/matplotlib.png',
      fallbackImg: '',
      label: 'Matplotlib',
      desc: 'Data Visualization'
    },
    {
      imgSrc: '/images/powerbi.jpeg',
      fallbackImg: '',
      label: 'Power BI',
      desc: 'Data Analysis'
    },
    {
      imgSrc: '/images/excel.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/732/732220.png',
      label: 'Excel',
      desc: 'Data Analysis'
    },

    // Cloud & DevOps
    {
      imgSrc: '/images/aws.png',
      fallbackImg: '',
      label: 'AWS',
      desc: 'Cloud Services'
    },
    {
      imgSrc: '/images/gcp.png',
      fallbackImg: '',
      label: 'Google Cloud',
      desc: 'Cloud Services'
    },
    {
      imgSrc: '/images/docker.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
      label: 'Docker',
      desc: 'Containerization'
    },

    // Version Control & Development Tools
    {
      imgSrc: '/images/git.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png',
      label: 'Git',
      desc: 'Version Control'
    },
    {
      imgSrc: '/images/github.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
      label: 'GitHub',
      desc: 'Code Hosting'
    },
    {
      imgSrc: '/images/postman.png',
      fallbackImg: '',
      label: 'Postman',
      desc: 'API Testing'
    },

    // Design & Operating Systems
    {
      imgSrc: '/images/figma.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/linux.svg',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/226/226772.png',
      label: 'Linux',
      desc: 'Operating System'
    },
]

const Skill = () => {
  return (
    <section id="skills" className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-2 sm:gap-3 grid-cols-5 sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
    {
        skillItem.map(({ imgSrc, label, desc, fallbackImg, iconLink }, key) =>
        (
            <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                fallbackImg={fallbackImg}
                iconLink={iconLink}
                classes="reveal-up"
            />
        ))
    }
</div>
        </div>
    </section>
  )
}

export default Skill