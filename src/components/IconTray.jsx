function IconTray({ items }) {
    // children is an array of objects, first is font awesome icon, second is link
  return (
    <div className="icon-tray">
        {items.map((item, index) => (
            <a href={item.href} target="_blank" rel="noopener noreferrer" key={index}>
                <i className={item.icon}></i>
            </a>
        ))}
    </div>
  )
}

export default IconTray