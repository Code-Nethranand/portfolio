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
        className="block h-full"
    >
        <div className={`relative p-4 rounded-2xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300/50 dark:hover:bg-zinc-700/50 active:bg-zinc-300/60 dark:active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-900/5 dark:ring-zinc-50/5 transition-colors h-full flex flex-col ${classes || ''}`}>
            <figure className="img-box aspect-square rounded-lg mb-4 flex-shrink-0">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    loading="lazy"
                    className="img-cover" 
                />
            </figure>

            <div className="flex items-start justify-between gap-4 flex-1">
                <div className="flex-1 min-w-0">
                    <h3 className="title-1 mb-3 text-zinc-900 dark:text-zinc-50 line-clamp-2">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) =>
                            <span 
                                key={key} 
                                className="h-8 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-300/50 dark:bg-zinc-50/5 grid items-center px-3 rounded-lg whitespace-nowrap"
                            >
                                {label}
                            </span>
                        )}
                    </div>
                </div>
                
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <span 
                    className="material-symbols-rounded"
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