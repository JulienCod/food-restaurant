const Images = ({ src, alt, className, isLazy, ref}) => {

    return (
        <img loading={isLazy? "lazy" : null} src={src} alt={alt} className={className} ref={ref}/>
    )
}

export default Images;