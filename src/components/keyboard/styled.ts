import styled from "styled-components";

export const KeyboardContent = styled.div`
  width: 500px;
  height: 300px;
  background: red;
  position: absolute;

  left: 110%;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  padding: 2rem;

  span {
    padding: 0.5rem;
    background: blue;
    cursor: pointer;
  }
`