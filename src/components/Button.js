import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({primary}) => primary ? 'red' : 'blue'};
  display: flex;
  justify-content: center;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`;

const ReversedButton = (props) => (
  <StyledButton
    { ...props }
    children={ props.children.split('').reverse().join('') }
  />
)

const Button = ({ primary, text }) => {
  return (
    <StyledButton as={ReversedButton} primary={primary}>{text}</StyledButton>
  )
}

export default Button;
