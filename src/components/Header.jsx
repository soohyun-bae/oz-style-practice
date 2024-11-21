import styled from "styled-components";
import { flexMixin, fontMixin } from "../Styled/Styled";

const HeaderContainer = styled.header`
${flexMixin({ justify: 'space-between', align: 'center' })}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flexMixin({ justify: 'center', align: 'center', gap: '20px' })}
    li {
      ${fontMixin('16px', 400)}
      list-style: none;
    }
  }
`

export default function Header({setLightMode}) {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
        <li 
        onClick={()=> setLightMode((prev) => !prev)}
        >다크모드</li>
      </ul>
    </HeaderContainer>
  );
}
