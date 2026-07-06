function IconTray({ items }) {
  return (
    <div className="icon-tray">
      {items.map((item) => (
        <a
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          key={item.href}
          aria-label={item.label}
          title={item.label}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  )
}

export default IconTray