import React, { Component } from "react";
import { connect } from "react-redux";
import {startApp, restartApp, setMistakeIndex, setTrueIndex} from "./actions"
import {Container} from "./style"
import MainComponent from "./MainComponent"
const randomString = () => Math.random().toString(36).slice(2)

let timerId
class App extends Component {
	constructor(props) {
	  super(props);
	  this.string = '';
	  this.state = {
	    timePassed: 0
	  };
	}
    componentDidMount() {
  		window.addEventListener("keydown",(e)=>this.handleKeyboard(e));
	}
    startTimer() {
    		this.setState({timePassed: 0})
			  timerId = setInterval(()=> {

			    if (this.state.timePassed === 59) {
			    	clearInterval(timerId)
			    	this.props.restartApp()
			    }
			    this.setState({timePassed: this.state.timePassed + 1})
			  }, 1000);
		}

    handleKeyboard(event) {
    		const {setMistakeIndex, setTrueIndex, currentIndex,appState} = this.props
    		if(appState===1||appState===3) return	
				if(event.key === this.string[currentIndex]){
						setTrueIndex(currentIndex)
				}else setMistakeIndex(currentIndex)     
    }

    startMyApp(){
    	this.startTimer()
    	this.props.startApp()
    	this.string = randomString()
    }

    restartMyApp(){
    	clearInterval(timerId)
    	this.props.restartApp()
    }
    
  render() {
  	const {appState,currentIndex} = this.props
  	const strLength = this.string.length
  	if(appState===2){
  		if( strLength === currentIndex) this.restartMyApp();
  	}
		return(
			<Container>
				<MainComponent 
				{...this.props}
				{...this.state} 
				string = {this.string}
				strLength= {strLength}
				startMyApp = {()=>this.startMyApp()}
				restartMyApp = {()=>this.restartMyApp()}
				 />
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		...state
	};
};

export default connect(mapStateToProps,{startApp, restartApp, setMistakeIndex, setTrueIndex})(App);
