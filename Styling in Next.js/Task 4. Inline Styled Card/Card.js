export default function Card({ backgroundColor, title, text }) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "10px 0",
      }}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}