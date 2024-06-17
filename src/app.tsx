import { ProjectTree } from "./components/ProjectTree/ProjectTree";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Tabs } from "./components/Tabs/Tabs";

const App = () => {
  return (
    <div>
      <Tabs />
      <div>
        <Sidebar />
        <ProjectTree />
      </div>
    </div>
  );
};

export default App;
