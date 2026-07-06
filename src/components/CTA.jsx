function CTA({ text, url, color }) {
  return (
    <a className={`circle ${color}`}href={url}>
      {text}
    </a>
  )
}

export default CTA