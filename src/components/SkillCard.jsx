import PropType from 'prop-types'

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes,
    iconLink,
    fallbackImg
}) => {
  // Handler to swap to fallback image if local image fails
  const handleImgError = (e) => {
    if (fallbackImg && e.target.src !== fallbackImg) {
      e.target.onerror = null;
      e.target.src = fallbackImg;
    }
  };

  return (
    <div className={'flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 ring-1 sm:ring-2 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors group ' + classes}>
        <figure className="bg-zinc-300/50 dark:bg-zinc-700/50 rounded-lg overflow-hidden w-10 h-10 sm:w-12 sm:h-12 p-1.5 sm:p-2 group-hover:bg-zinc-400 dark:group-hover:bg-zinc-900 transition-colors flex items-center justify-center mx-auto sm:mx-0">
            {iconLink ? (
                <a href={iconLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                    <img 
                        src={imgSrc}
                        width={32}
                        height={32}
                        alt={label}
                        onError={handleImgError}
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                </a>
            ) : (
                <img 
                    src={imgSrc}
                    width={32}
                    height={32}
                    alt={label}
                    onError={handleImgError}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
            )}
        </figure>
        <div className="hidden sm:block">
            <h3 className="text-zinc-900 dark:text-zinc-50">{label}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                {desc}
            </p>
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropType.string.isRequired,
    label: PropType.string.isRequired,
    desc: PropType.string.isRequired,
    classes: PropType.string,
    iconLink: PropType.string,
    fallbackImg: PropType.string
}

export default SkillCard