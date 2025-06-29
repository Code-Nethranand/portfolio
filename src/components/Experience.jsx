const experienceItems = [
    {
      company: 'Thaniya Technologies',
      position: 'Full Stack Developer',
      period: 'Feb 2025 - May 2025',
      location: 'Mangalore, Karnataka',
      description: ' Built a real-time chatting web app using React, enhancing user engagement with seamless message delivery and live updates. Optimized web app performance, integrating WebSocket for efficient communication, reducing latency by 25%.',
      technologies: [],
      logo: '/images/company1.png',
      fallbackLogo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    {
      company: 'Internshala',
      position: 'Web Developer Intern',
      period: 'Oct 2024 - Dec 2024',
      location: 'Remote',
      description: 'Created a responsive website using HTML, CSS, Bootstrap, and JavaScript, improving UI/UX performance by 30%. Implemented PHP and DBMS, enabling secure user registration and profile management for 100+ users.',
      technologies: [],
      logo: '/images/company2.png',
      fallbackLogo: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
]

const Experience = () => {
  return (
    <section id="experience" className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Work Experience
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 mt-3 mb-8 md:mb-12 max-w-[50ch] reveal-up">
                My professional journey and the valuable experiences I've gained working with diverse teams and technologies.
            </p>

            <div className="space-y-6 md:space-y-8 reveal-up">
                {experienceItems.map(({ company, position, period, location, description, technologies, logo, fallbackLogo }, key) => (
                    <div key={key} className="relative">
                        {/* Timeline line */}
                        {key < experienceItems.length - 1 && (
                            <div className="absolute left-6 sm:left-8 top-12 sm:top-16 w-0.5 h-6 sm:h-8 bg-zinc-400 dark:bg-zinc-700"></div>
                        )}
                        
                        <div className="flex gap-4 sm:gap-6">
                            {/* Company logo */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-zinc-300/50 dark:bg-zinc-700/50 rounded-lg flex items-center justify-center p-2 sm:p-3">
                                    <img 
                                        src={logo}
                                        width={40}
                                        height={40}
                                        alt={company}
                                        onError={(e) => {
                                            if (fallbackLogo && e.target.src !== fallbackLogo) {
                                                e.target.onerror = null;
                                                e.target.src = fallbackLogo;
                                            }
                                        }}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Experience details */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2 sm:mb-3">
                                    <div className="min-w-0">
                                        <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-50 truncate">{company}</h3>
                                        <p className="text-sky-400 font-medium text-sm sm:text-base">{position}</p>
                                    </div>
                                    <div className="text-left sm:text-right">
                                        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">{period}</p>
                                        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 truncate">{location}</p>
                                    </div>
                                </div>

                                <p className="text-zinc-600 dark:text-zinc-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                                    {description}
                                </p>

                                {/* Technologies used */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {technologies.map((tech, techKey) => (
                                        <span 
                                            key={techKey}
                                            className="px-2 sm:px-3 py-1 bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm rounded-full border border-zinc-300 dark:border-zinc-700 whitespace-nowrap"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Experience 