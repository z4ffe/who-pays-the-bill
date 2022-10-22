import React, {useContext, useRef, useState} from 'react';
import {Button, Form, Alert} from "react-bootstrap";
import {MyContext} from "../store";

const StageOne = () => {
   const textInput = useRef()
   const store = useContext(MyContext)
   const [error, setError] = useState([false, ''])

   const handleSubmit = (e) => {
	  e.preventDefault()
	  const player = textInput.current.value;
	  const validate = validateInput(player)
	  if (validate) {
		 setError([false, ''])
		 store.addPlayer(player)
		 textInput.current.value = ''
	  }

   }

   const validateInput = (player) => {
	  if (player === '') {
		 setError([true, 'Sorry, you need to add something'])
		 return false
	  }
	  if (player.length <= 2) {
		 setError([true, 'Sorry, name must be longer than 2 characters'])
		 return false
	  }
	  return true
   }


   return (
	  <>
		 <Form onSubmit={handleSubmit} className='mt-4'>
			<Form.Group>
			   <Form.Control type='text' placeholder='Add player name: ' name='player' ref={textInput}/>
			</Form.Group>
			{error[0] ? <Alert>{error[1]}</Alert> : null}
			<Button className='miami' variant='primary' type='submit'>Add player</Button>
			{store.state.players && store.state.players.length > 0 ?
			   <>
				  <hr/>
				  <div>
					 <ul className="list-group">
						{store.state.players.map((player, id) => [
						   <li key={id} className="list-group-item
						   d-flex justify-content-between align-items-center list-group-item-action">
							  {player}
							  <span className='badge badge-danger' onClick={() => store.removePlayer(id)}>×</span>
						   </li>
						])}
					 </ul>
					 <div className='action_button' onClick={() => store.next()}>NEXT</div>
				  </div>
			   </> : null}
		 </Form>
	  </>
   );
};

export default StageOne;
