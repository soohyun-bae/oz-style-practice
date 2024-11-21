import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled, { createGlobalStyle, css } from "styled-components"
import { flexMixin } from "./Styled/Styled";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  background-color: #121212;
}

${(props) => props.lightMode === true ?
  css`
    *{
      background-color: white;
      color: black;
    }  
    header{
      background-color: #f0f0f0 !important;
      h1,ul, li{
        background-color: #f0f0f0 !important;
      }
    }
  `
:""}

`

const StyledSection = styled.section`
${flexMixin({ justify: 'center', align: 'center', wrap: 'wrap', gap: '20px' })}
  padding: 20px 40px;
`
function App() {
  const [lightMode, setLightMode] = useState(true)

  return (
    <main>
      <GlobalStyle lightMode={lightMode}/>
      <Header setLightMode={setLightMode}/>
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </main>
  );
}

export default App;
