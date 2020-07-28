import styled from 'styled-components';
import { color } from '../lib/_utils/branding'

const StyledApp = styled.div`
  text-align: center;
`
const StyledComponent = styled.div`
  background-color: ${color.oldGrey};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.blue};

`

export { StyledApp, StyledComponent }