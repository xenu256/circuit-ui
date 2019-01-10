import styled from 'react-emotion';
import { Wrapper } from './Wrapper';

const TooltipContainer = styled('div')`
  position: relative;
  line-height: 0;

  div {
    visibility: visible;
    opacity: 1;
  }
`;

const OuterWrapper = ({ children }) => (
  <Wrapper>
    <TooltipContainer>{children}</TooltipContainer>
  </Wrapper>
);
export default OuterWrapper;
