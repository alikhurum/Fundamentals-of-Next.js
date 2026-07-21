import styles from "./ProfileCard.module.css";

export default function ProfileCard({
  name,
  age,
  profession,
  favoriteColor,
}) {
  return (
    <div className={styles.card}>
      <h2
        className={`${styles.name} text-blue-600`}
        style={{ color: favoriteColor }}
      >
        {name}
      </h2>

      <p className="text-gray-700">
        <strong>Age:</strong> {age}
      </p>

      <p className="text-gray-700">
        <strong>Profession:</strong> {profession}
      </p>
    </div>
  );
}