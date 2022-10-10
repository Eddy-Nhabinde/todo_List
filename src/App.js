import CenteredTabs from "./components/tabsComponent/tabs";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { All } from "./pages/all/all";

function App() {
  return (
    <Router>
      <CenteredTabs />
      <Routes>
        <Route path='/' element={<All />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
