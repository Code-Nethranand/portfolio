import React from 'react'

const aboutItems = [
    {
      label: 'Project done',
      number: 10
    },
    {
      label: 'Years of experience',
      number: 2
    }
];

const About = () => {
  return (
    <section
        id="about"
        className='section'
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome! I'm Nethranand, a professional web developer and data analyst with a passion for creating dynamic, high-performance websites and turning data into valuable insights. With a blend of creativity and technical expertise, I build visually stunning, user-friendly web experiences while leveraging data to drive informed decisions and enhance business outcomes. Let’s bring your vision to life with impactful design and data-driven precision.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {
                    aboutItems.map(({ label, number }, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                            </div>

                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                }

                <img 
                src="/images/logo.svg" 
                alt="Logo" 
                width={30}
                height={30}
                className="ml-auto md:w-[40px] md:h-[40px]" 
                />
            </div>
            </div>
            
        </div>

    </section>
  )
}

export default About