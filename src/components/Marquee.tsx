import s from './Marquee.module.css';

const items = [
  'Those Dark Eyes',
  'Take Me On',
  "I'm Hypnotized",
  'Lure Me In',
  'To Win The Prize',
  'Follow Me',
  'All Through The Night',
  'Prisoner To',
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
