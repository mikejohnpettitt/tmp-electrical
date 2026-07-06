function ColumnsTwo({ image, altText, children }) {
  return (
    <div className="columns two">
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