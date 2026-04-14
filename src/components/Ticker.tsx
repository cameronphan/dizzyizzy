const items = [
  'Dizzy Izzy',
  'New Wave',
  'Disco',
  'Rock',
  'Pop',
  'Live Shows',
  'Stream Now',
  'Official Site',
  'Houston TX',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
            <span className="ticker-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
