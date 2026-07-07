function CTA({ text, url, color = "green" }) {
  return (
    <a className={`circle ${color}`}href={url}>
      {text}
    </a>
  )
}

export default CTA