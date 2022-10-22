import React, {Component} from "react";
import {ToastContainer, toast} from "react-toastify";

const MyContext = React.createContext()

const DEFAULT_STATE = {
   stage: true,
   players: [],
   result: ''
}

class MyProvider extends Component {
   state = DEFAULT_STATE

   addPlayer = (name) => {
	  this.setState((prevState) => ({
		 players: [...prevState.players, name]
	  }))
   }

   removePlayer = (id) => {
	  let newArray = this.state.players
	  newArray.splice(id, 1)
	  this.setState({players: newArray})
   }

   next = () => {
	  if (this.state.players.length < 2) {
		 toast.error('You need more than 1 player', {
			position: toast.POSITION.TOP_LEFT,
			autoClose: 2000,
		 })
	  } else {
		 this.setState({stage: false},
			() => {
			   setTimeout(() => {
				  this.looser()
			   }, 1500)
			}
		 )
	  }
   }

   looser = () => {
		this.setState({
		   result: this.state.players[Math.floor(Math.random() * this.state.players.length)]
		})
   }

   reset = () => {
	  this.setState(DEFAULT_STATE)
   }


   render() {
	  return (
		 <>
			<MyContext.Provider value={{
			   state: this.state,
			   addPlayer: this.addPlayer,
			   removePlayer: this.removePlayer,
			   next: this.next,
			   looser: this.looser,
			   reset: this.reset
			}}>
			   {this.props.children}
			</MyContext.Provider>
			<ToastContainer/>
		 </>
	  )
   }
}

export {MyContext, MyProvider}
