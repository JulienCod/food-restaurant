const Images = ({ src, alt, className, isLazy, ref, width, height}) => {

    return (
        <img loading={isLazy? "lazy" : null} src={src} alt={alt} className={className} ref={ref} width={width} height={height}/>
    )
}

export default Images;