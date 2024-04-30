import './App.css';
import Newtrands from './Components/Collaboration/Newtrands/Newtrands';
import Pumaxfenty from './Components/Collaboration/Pumaxfenty/Pumaxfenty';
import Titilepumaxfenty from './Components/Collaboration/Pumaxfenty/Titilepumaxfenty';
import Pumaxrcb from './Components/Collaboration/Pumaxrcb/Pumaxrcb';
import Navebar from './Components/Navebar/Navebar';
import Landingtag from './Components/Offerstags/Landingtag';
import Midtag from './Components/Offerstags/Midtag';
import Swipershophome from './Components/Swipershop/Swipershophomapage/Swipershophome';

function App() {
  return (
    <div className="App">
      {/* jai shree ram jai ganesh  */}
      <Landingtag/>
      <Navebar/>
      <Midtag/>
      <Newtrands/>
      <Swipershophome/>
      <Pumaxfenty/>
      <Titilepumaxfenty/>
      <Pumaxrcb/>
    </div>
  );
}

export default App;
