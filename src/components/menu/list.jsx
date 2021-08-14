export default function List({ setMenuOpen, listName, hrefName }) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={hrefName}>{listName}</a>
    </li>
  );
}
