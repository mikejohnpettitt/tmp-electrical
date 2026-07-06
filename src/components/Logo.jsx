function Logo({ src, className }) {
  return (
    <div className={`logo ${className}`}>
      <img src={src} alt="TMP Electrical Logo" />
    </div>
  )
}

export default Logo