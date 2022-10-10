import CenteredTabs from "./components/tabsComponent/tabs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TodosTodos } from "./pages/Todos/todos";

function App() {
  return (
    <Router>
      <CenteredTabs />
      <Routes>
        <Route path='/' element={<TodosTodos />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
