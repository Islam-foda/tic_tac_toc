// eslint-disable-next-line react/prop-types
export default function Box({ value, onPlay }) {
  return (
    <>
      <div className="game">
        <button className="button" onClick={onPlay}>
          {value}
        </button>
      </div>
    </>
  );
}
