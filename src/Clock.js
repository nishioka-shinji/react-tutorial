export default function Clock({ time }) {
  let hours = time.getHours();
  let hoge
  if (hours >= 0 && hours <= 6) {
    hoge = 'night';
  } else {
    hoge = 'day';
  }
  return (
    <h1 id="time" className={hoge}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
