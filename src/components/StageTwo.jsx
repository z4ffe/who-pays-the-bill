import React, {useContext} from 'react';
import {MyContext} from "../store";

const StageTwo = () => {
   const store = useContext(MyContext)

  return (
	<>
	   <div className='result_wrapper'>
			<h3>The looser is:</h3>
		  	<div>{store.state.result.charAt(0).toUpperCase() + store.state.result.slice(1)}</div>

	   </div>
	   <div className="action_button" onClick={() => store.reset()}>START OVER</div>
	   <div className="action_button btn_2" onClick={() => store.looser()}>GET NEW LOOSER</div>
	</>
  );
};

export default StageTwo;
