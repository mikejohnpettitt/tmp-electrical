function ColumnsTwo({ image, altText, orientation, children }) {
  return (
    <div className={`columns two ${orientation}`}>
      <div className="column image-column">
        <img src={image} alt={altText} />
      </div>

      <div className="column text-column">
        {children}
      </div>
    </div>
  )
}

export default ColumnsTwo