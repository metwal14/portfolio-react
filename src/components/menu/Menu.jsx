import "./menu.scss";
import { MenuListData } from "../../constant";
import List from "./list";
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {MenuListData.map((singleList, index) => (
          <List
            setMenuOpen={setMenuOpen}
            hrefName={singleList.hrefName}
            listName={singleList.listName}
          />
        ))}
      </ul>
    </div>
  );
}
