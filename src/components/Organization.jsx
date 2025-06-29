const organizationLogos = [
    {
      imgSrc: '/images/organization1.png',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      name: 'Organization 1'
    },
    {
      imgSrc: '/images/organization2.png',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      name: 'Organization 2'
    },
    {
      imgSrc: '/images/organization3.png',
      fallbackImg: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
      name: 'Organization 3'
    },
    // {
    //   imgSrc: '/images/organization4.svg',
    //   fallbackImg: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    //   name: 'Organization 4'
    // },
    // {
    //   imgSrc: '/images/organization5.svg',
    //   fallbackImg: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    //   name: 'Organization 5'
    // },
    // {
    //   imgSrc: '/images/organization6.svg',
    //   fallbackImg: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    //   name: 'Organization 6'
    // },
]

const Organization = () => {
  return (
    <section id="organizations" className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Organizations I've Worked With
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Trusted by leading organizations and companies across various industries.
            </p>

            <div className="relative overflow-hidden reveal-up">
                <div className="flex animate-scroll">
                    {/* First set of logos */}
                    {organizationLogos.map(({ imgSrc, name, fallbackImg }, key) => (
                        <div key={key} className="flex-shrink-0 mx-8">
                            <img 
                                src={imgSrc}
                                width={120}
                                height={120}
                                alt={name}
                                onError={(e) => {
                                    if (fallbackImg && e.target.src !== fallbackImg) {
                                        e.target.onerror = null;
                                        e.target.src = fallbackImg;
                                    }
                                }}
                                className="h-32 w-auto object-contain rounded-lg"
                            />
                        </div>
                    ))}
                    
                    {/* Second set for seamless loop */}
                    {organizationLogos.map(({ imgSrc, name, fallbackImg }, key) => (
                        <div key={`duplicate-${key}`} className="flex-shrink-0 mx-8">
                            <img 
                                src={imgSrc}
                                width={120}
                                height={120}
                                alt={name}
                                onError={(e) => {
                                    if (fallbackImg && e.target.src !== fallbackImg) {
                                        e.target.onerror = null;
                                        e.target.src = fallbackImg;
                                    }
                                }}
                                className="h-32 w-auto object-contain rounded-lg"
                            />
                        </div>
                    ))}

                    {/* Third set to ensure perfect continuity */}
                    {organizationLogos.map(({ imgSrc, name, fallbackImg }, key) => (
                        <div key={`triplicate-${key}`} className="flex-shrink-0 mx-8">
                            <img 
                                src={imgSrc}
                                width={120}
                                height={120}
                                alt={name}
                                onError={(e) => {
                                    if (fallbackImg && e.target.src !== fallbackImg) {
                                        e.target.onerror = null;
                                        e.target.src = fallbackImg;
                                    }
                                }}
                                className="h-32 w-auto object-contain rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Organization 