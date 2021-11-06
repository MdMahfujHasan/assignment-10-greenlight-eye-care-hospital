import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import EyeSurgeries from './Components/EyeSurgeries/EyeSurgeries';
import Blepharoplasty from './Components/Blepharoplasty/Blepharoplasty';
import Retinasurgery from './Components/Retinasurgery/Retinasurgery';
import Cornealtransplant from './Components/Cornealtransplant/Cornealtransplant';
import Cataractsurgery from './Components/Cataractsurgery/Cataractsurgery';
import Glaucomasurgery from './Components/Glaucomasurgery/Glaucomasurgery';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<EyeSurgeries />} />
          <Route path="/eyesurgeries" element={<EyeSurgeries />} />
          <Route path="/blepharoplasty" element={<Blepharoplasty />} />
          <Route path="/retinasurgery" element={<Retinasurgery />} />
          <Route path="/cornealtransplant" element={<Cornealtransplant />} />
          <Route path="/cataractsurgery" element={<Cataractsurgery />} />
          <Route path="/glaucomasurgery" element={<Glaucomasurgery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div >
  );
}

export default App;
