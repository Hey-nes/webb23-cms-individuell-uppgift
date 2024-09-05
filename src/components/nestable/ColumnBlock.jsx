import Image from "next/image";

export default function ColumnBlock({ blok }) {
  return (
    <section className="column-block">
      <div className="column-content">
        <h1>{blok.title}</h1>
        <p>{blok.text}</p>
        {blok.link && (
          <a href={blok.link.url} className="column-link">
            {blok.link.label || "Read More"}
          </a>
        )}
      </div>
      <div className="column-image">
        {blok.image && (
          <Image
            src={blok.image.filename}
            alt={blok.image.alt || "Column Image"}
            width={blok.image.width || 600}
            height={blok.image.height || 400}
          />
        )}
      </div>
    </section>
  );
}
