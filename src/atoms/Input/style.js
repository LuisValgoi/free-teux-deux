import styled from "styled-components";

export const StyledField = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  position: relative;
  text-align: left;
`;

export const StyledLabel = styled.label`
  font-size: 11px;
  margin-bottom: 0.2rem;
`;

export const StyledInputArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  appearance: none;
  background-color: transparent;
  border: 0;
  color: inherit;
  display: block;
  font-family: inherit;
  font-size: inherit;
  height: 100%;
  outline: 0;
  padding: 0;
  width: 100%;
  flex-grow: 9;
`;
