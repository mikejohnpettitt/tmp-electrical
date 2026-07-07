function Section({ children, id, className = "", bgImage }) {
  return (
    <section 
    id={id} 
    className={`section ${className}`} 
    style={
      { backgroundImage: bgImage ? `url(${bgImage})` : 'none' }
      }
      >
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default Section
