import Image from "next/image";

export default function GridBlock({ blok }) {
  // Ensure that blok.cards exists and is an array
  const cards = blok.cards || [];

  return (
    <section className="grid-container">
      {cards.map((card, index) => (
        <div key={index} className="grid-card">
          <div className="card-image">
            {card.image && (
              <Image
                src={card.image.filename}
                alt={card.image.alt || "Card Image"}
                width={card.image.width || 300}
                height={card.image.height || 200}
              />
            )}
          </div>
          <div className="card-content">
            <h1>{card.title}</h1>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
