import React, { useState, useEffect } from 'react'
import { ButtonPrimary, ButtonOutline } from './Button'

const Hero = () => {
    const name = "Geddada Nethranand";
    const [displayedName, setDisplayedName] = useState("");
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    useEffect(() => {
        let current = 0;
        let hacked = false;
        let interval;

        function hackStep() {
            if (current < name.length) {
                let partial = name.slice(0, current + 1);
                let randomTail = "";
                for (let i = 0; i < name.length - current - 1; i++) {
                    randomTail += chars[Math.floor(Math.random() * chars.length)];
                }
                setDisplayedName(partial + randomTail);
                current++;
            } else if (!hacked) {
                setDisplayedName(name);
                hacked = true;
                clearInterval(interval);
            }
        }

        interval = setInterval(hackStep, 60);
        return () => clearInterval(interval);
    // eslint-disable-next-line
    }, []);

    return (
        <section 
            id="home" 
            className="pt-28 lg:pt-20">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/images/Passport.png"
                                width={40}
                                height={40}
                                alt="Code-Nethranand"
                                className='img-cover' 
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    
                    <h2 className="headline-1 text-lg sm:text-xl lg:text-2xl font-medium mt-10 mb-2">
                        Hi, I'm
                    </h2>

                    <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-sky-500 mb-3 leading-tight font-mono tracking-wider">
                        <span>{displayedName}</span>
                        <span className="animate-pulse">|</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-zinc-700 dark:text-zinc-200 mb-8 lg:mb-10 max-w-[32ch]">
                        A passionate Full Stack Developer crafting modern, impactful web experiences.
                    </p>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            href="./public/Resume/resume-geddada-nethranand.pdf"
                            label="Download CV"
                            icon="download"
                        />
                        <ButtonOutline
                            href="#about"
                            label="Scroll Down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure className="w-full max-w-[440px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-40/40 to-65% rounded-[40px] overflow-hidden ">
                        <img src="/images/Passport.png"
                            width={340}
                            height={420} 
                            alt="Code-Nethranand" 
                            className="w-full" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero