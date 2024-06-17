import { Folder, X, Plus } from "lucide-react";
import classes from "./Tabs.module.css";
import cl from "clsx";

type TabProps = {
  name: string;
  active?: boolean;
};

const Tab = ({ name, active }: TabProps) => {
  return (
    <div className={cl(classes.tab, active && classes.active)}>
      <Folder size={18} className={classes.folder} />
      <div className={classes.name}>{name}</div>
      {active && <X className={classes.close} size={18} />}
    </div>
  );
};

export const Tabs = () => {
  return (
    <div className={classes.tabs}>
      <Tab name="Designsystemet" active />
      <Tab name="Theme generator" />
      <Tab name="Test project" />
      <Plus className={classes.plus} size={20} />
    </div>
  );
};
