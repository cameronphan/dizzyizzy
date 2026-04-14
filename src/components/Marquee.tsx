import s from './Marquee.module.css';

const items = [
  'Dizzy Izzy',
  'Dark Eyes — Out Now',
  'New Wave',
  'Disco',
  'Houston TX',
  'Rock',
  'Pop',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className={s.wrap}>
      <div className={s.track}>
        {doubled.map((item, i) => (
          <span key={i} className={s.item}>
            {item}
            <span className={s.dot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
