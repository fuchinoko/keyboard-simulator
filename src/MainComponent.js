import React from 'react';
import {Button, StringContainer, MySymbol, MyApp} from "./style"
const MainComponent = (props) =>{
		const {
			timePassed, numberOfMistakes, strLength,
			arrayWithTrue, arrayWithMistakes, appState,
			startMyApp, restartMyApp, string
		} = props
    const ResultElem = ()=> (
  		<div>
				<p>Прошло времени:  {timePassed}</p>
				<p>Количество ошибок:  {numberOfMistakes} </p>
				<p>Количество символов:  {strLength}</p>
				<p>Осталось символов: {strLength - arrayWithTrue.length - arrayWithMistakes.length}</p>
  		</div>
  	)
		
	return(	
			<MyApp>
				{(()=>{
					switch(appState){
	      		case 2:
	      			return (
	      				<div>
							<p>Осталось времени:  {60 - timePassed}</p>
							<ResultElem/>
							<br/>

							<StringContainer>
								{string.split('').map((elem,i) => arrayWithTrue.includes(i)?null:  <MySymbol className={arrayWithMistakes.includes(i)?'mistake':''} key={i}>{elem}</MySymbol>
									
								)}
							</StringContainer>
						</div>
						)
	      		case 3:
	      			return <ResultElem/>
					}
				})()} 

				{(()=>{
					switch(appState){
						case 1:
							return <Button onClick={()=>startMyApp()}>Старт</Button>
	      		case 2:
	      			return <Button onClick={restartMyApp}>Закончить</Button>
	      		case 3:
	      			return <Button onClick={startMyApp}>Заново</Button>
					}
				})()} 
	   
			</MyApp>
	)
}
export default MainComponent