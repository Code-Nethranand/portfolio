import PropTypes from "prop-types"

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,    
    classes
}) => {
  return (
    <a 
        href={projectLink} 
        target='_blank'
        rel="noopener noreferrer"
        className="block h-full group"
    >
        <div className={`relative p-3 md:p-4 rounded-xl md:rounded-2xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 active:bg-zinc-300/60 dark:active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-900/5 dark:ring-zinc-50/5 transition-all duration-200 h-full flex flex-col ${classes || ''}`}>
            <figure className="img-box aspect-square rounded-lg mb-3 md:mb-4 flex-shrink-0 overflow-hidden">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    loading="lazy"
                    className="img-cover transition-transform duration-200 group-hover:scale-105" 
                />
            </figure>

            <div className="flex items-start justify-between gap-2 md:gap-4 flex-1 min-h-0">
                <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-zinc-900 dark:text-zinc-50 line-clamp-2 leading-tight">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1 md:gap-2">
                        {tags.slice(0, 3).map((label, key) =>
                            <span 
                                key={key} 
                                className="h-6 md:h-7 lg:h-8 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-300/50 dark:bg-zinc-50/5 grid items-center px-2 md:px-3 rounded-md md:rounded-lg whitespace-nowrap flex-shrink-0"
                            >
                                {label}
                            </span>
                        )}
                        {tags.length > 3 && (
                            <span className="h-6 md:h-7 lg:h-8 text-xs md:text-sm text-zinc-500 dark:text-zinc-500 bg-zinc-300/30 dark:bg-zinc-50/3 grid items-center px-2 md:px-3 rounded-md md:rounded-lg flex-shrink-0">
                                +{tags.length - 3}
                            </span>
                        )}
                    </div>
                </div>
                
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-lg flex items-center justify-center bg-sky-400 text-zinc-950 shrink-0 transition-transform duration-200 group-hover:scale-110">
                    <span 
                    className="material-symbols-rounded text-base md:text-lg lg:text-xl leading-none"
                    aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>
            </div>    
        </div>
    </a>
  )
}

ProjectCard.propTypes = {
    imgSrc:  PropTypes.string.isRequired,  
    title: PropTypes.string.isRequired,  
    tags: PropTypes.array.isRequired,  
    projectLink: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default ProjectCard