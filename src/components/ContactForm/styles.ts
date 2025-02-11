import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const Label = styled("label")`
  display: block;
  padding: 0 0.675rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const ChallengeOption = styled("div")`
  margin-bottom: 0.5rem;
`;

export const ChallengeLabel = styled("label")`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled("input")`
  margin-right: 0.5rem;
  width: 1.5em;
`;

export const OtherInputContainer = styled("div")`
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  width: calc(100% - 2rem);
  
  .other-input {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.875rem;
    
    &:focus {
      border-color: rgb(103, 58, 183);
      outline: none;
    }
  }
`;
