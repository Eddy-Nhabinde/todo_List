import CenteredTabs from "./components/tabsComponent/tabs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TodosTodos } from "./pages/Todos/todos";
import { ActiveTodos } from "./pages/Active/active";
import { Complet } from "./pages/Completed/completed";

function App() {
  return (
    <Router>
      <CenteredTabs />
      <Routes>
        <Route path='/' element={<TodosTodos />} ></Route>
        <Route path='/Active' element={<ActiveTodos />} ></Route>
        <Route path='/Completed' element={<Complet />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
