import styled from "styled-components";
import { flexMixin, fontMixin, gray } from "../Styled/Styled";

const StyledDiv = styled.div`
${flexMixin({direction: 'column', align: 'flex-start', gap: '5px'})}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${fontMixin('12px')}
    color: $tag-color;
    border: 1px solid $tag-color;
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${fontMixin('18px', 600)}
  }
  p {
    ${fontMixin('12px')}
    color: ${gray};
  }
`

export default function Content({ content }) {
  return (
<StyledDiv>
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
</StyledDiv>
  );
}
