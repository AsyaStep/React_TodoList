import Header from "./components/Header";
import "./App.scss";
import Modals from "./components/Modals";
import TaskContainer from "./containers/TaskContainer";
import SearchTask from "./components/SearchTask";
import LocalStorageContainer from "./containers/LocalStorageContainer";

function App() {
  return (
    <div className="app">
      <Header>
        <SearchTask/>
        <LocalStorageContainer/>
      </Header> 
      <div className="app__wrapper">
        <TaskContainer/>
        <Modals/>
      </div>
    </div>
  );
}

export default App;
