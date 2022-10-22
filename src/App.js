import {useContext} from "react";
import {MyContext} from "./store";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import './style/app.css'

const App = () => {
   const store = useContext(MyContext)

   return (
	  <div className="wrapper">
		 <div className="center-wrapper">
			<h1>Who pays the bill?</h1>
			{store.state.stage ? <StageOne/> : <StageTwo/>}
		 </div>
	  </div>
   );
}

export default App;
