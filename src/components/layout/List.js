export default function List({ items, classUl, classLi }) {
  return (
    <ul className={classUl}>
      {items.map((item) => (
        <li className={classLi} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
