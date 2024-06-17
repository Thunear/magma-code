import classes from "./ProjectTree.module.css";
import { Search } from "lucide-react";

import { useEffect } from "react";

export const ProjectTree = () => {
  useEffect(() => {
    (async () => {
      const res = await window.electron.blenderVersion("ff");
      console.log(res);
    })();
  }, []);

  return (
    <div className={classes.tree}>
      <div className={classes.search}>
        <Search className={classes.searchIcon} size={20} />

        <input
          className={classes.searchInput}
          type="text"
          placeholder="Search"
        />

        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
