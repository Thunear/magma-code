import classes from "./Sidebar.module.css";
import cl from "clsx";
import { File, GitBranch, MessageCircle, Package } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={cl(classes.item, classes.active)}>
        <File size={22} className={classes.file} />
      </div>
      <div className={cl(classes.item)}>
        <GitBranch size={22} className={classes.file} />
      </div>
      <div className={cl(classes.item)}>
        <MessageCircle size={22} className={classes.file} />
      </div>
      <div className={cl(classes.item)}>
        <Package size={22} className={classes.file} />
      </div>
    </div>
  );
};
