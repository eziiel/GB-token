import * as Select from '@radix-ui/react-select';
import styled from "styled-components";


export const Root = styled(Select.Root)`
  display: flex;
`


export const Trigger = styled(Select.Trigger)`

  width: 350px;
  background: #D9D9D9 ;
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
`


export const Item = styled(Select.Item)`
  background: #D9D9D9 ;
  border-radius: 8px;
  padding: 0.75rem;
  cursor: pointer;
`

export const Portal = styled(Select.Portal)`
  /* width: 800px;
  height: 500px;
  background: red;
  position: relative; */
`

export const Content = styled(Select.Content)`
  /* position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0; */
  
  /* width: 400px; */
  /* top: 50%; */
  /* left: 50%; */
  /* transform: translate(-20%, -100%); */
  
  /* width: 800px;
  width: 100vw;
  height: 500px;
  background: red;
  position: absolute; */
`

export const Viewport = styled(Select.Viewport)`

background: red;
  position: relative;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`

