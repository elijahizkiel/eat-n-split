/*eslint-disable react/prop-types */

export default function Friend({ id, name, image, balance }) {
  return (
    <li className="friend" id={id}>
      <img className="friend-img" src={image} />
      <h3 className="friend-name">{name}</h3>
      <div className="friend-balance">
        {balance < 0 ? (
          <p style={{ color: "red" }}>
            You owe ${name} $${-1 * balance}
          </p>
        ) : balance > 0 ? (
          <p style={{ color: "orange" }}>
            {name} owes you $${balance}
          </p>
        ) : (
          <p>You and ${name} are even!</p>
        )}
      </div>
    </li>
  );
}
