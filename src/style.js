import styled from "styled-components"


export const Container = styled.div `
	display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  height:70vh;
  p{
  	margin: 5px;
  }
  .mistake{
  	background:red;
  }
`
export const Button = styled.button`
		width: 100%;
  	padding: 5px;
`
export const StringContainer = styled.div `
		display: flex;
		margin-bottom: 10px;

`
export const MyApp = styled.div`
		border: 1px solid black;
  	padding: 20px;
  	width: 220px;
`
export const MySymbol = styled.div`
  	padding: 5px;
  	width: 9px;
  	border-bottom: 1px solid black;
  	border-top: 1px solid black;
  	border-left: 1px solid black;
  	&:last-child{
			border-right: 1px solid black;
		}
`