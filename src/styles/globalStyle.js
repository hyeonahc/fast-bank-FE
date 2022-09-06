import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
	* {
		box-sizing:border-box;
	}
	h1, h2, h3, h4, h5, h6 {font-weight: ${({ theme }) => theme.fontWeight.bold};}
	html { font-size: 62.5%; }
	body {
		font-size: 1.6rem;
		line-height: 1.25;
		min-height: 100vh;
		height:100%;
		padding:4rem 3.6rem;
		max-width: ${({ theme }) => theme.widthDevice.default};
		margin: 0 auto;
		border-left: 1px solid #ddd;
		border-right: 1px solid #ddd;
		font-family: 'Noto Sans KR', sans-serif;
		position: relative;
	}
	button {
		background: none; 
		outline: none;
		border: none; 
		padding: 0; 
		cursor: pointer;
	}
	/* mq */
	@media (max-width:${({ theme }) => theme.widthDevice.default}) {
		body {padding: 4rem 6.25%;}
	}
`
