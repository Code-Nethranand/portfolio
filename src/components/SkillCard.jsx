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
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 translate-colors group ' + classes}>
        <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 translate-colors">
            {iconLink ? (
                <a href={iconLink} target="_blank" rel="noopener noreferrer">
                    <img 
                        src={imgSrc}
                        width={32}
                        height={32}
                        alt={label}
                        onError={handleImgError}
                    />
                </a>
            ) : (
                <img 
                    src={imgSrc}
                    width={32}
                    height={32}
                    alt={label}
                    onError={handleImgError}
                />
            )}
        </figure>
        <div>
            <h3>{label}</h3>
            <p className="text-zinc-400 text-sm">
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