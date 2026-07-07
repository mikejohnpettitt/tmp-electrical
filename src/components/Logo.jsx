function Logo({ src, className, altText = "" }) {
  return (
    <div className={`logo ${className}`}>
      <img src={src} alt={altText} />
    </div>
  )
}

export default Logo