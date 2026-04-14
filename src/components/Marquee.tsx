import s from './Marquee.module.css';

const items = [
  'Dark Eyes',
  'Take Me On',
  'Hypnotized',
  'All Through The Night',
  'Deep Inside',
  'Win The Prize',
  'Lure Me In',
  'Dizzy Izzy',
  'Out Now',
  'Follow Me',
  'Slipped Away',
  'Those Dark Eyes',
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
