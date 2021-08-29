import styled, { keyframes } from 'styled-components';
import Button from './Button';
import Icon from './Icon';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Section = styled.section`
  background-color: #aac9f0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;

  .animation {
    animation: 2s ${rotate} linear infinite
  }
`

const Title = styled.h1`
  color: #aaecf0;
  animation: 3s ${fadeIn} ease-in;
`;

const SubTitle = styled(Title)`
  font-size: 14px;
`;

const ParagraphTitle = styled(SubTitle)`
  color: grey;
`;

const ReversedTitle = (props) => (
  <ParagraphTitle 
    {...props} 
    children={ props.children.split('').reverse().join('') } 
  />
);

const Content = () => {
  return (
    <Section>
      <div className="animation">circle</div>
      <Title>💅🏻 Section</Title>
      <SubTitle>I am a subtitle</SubTitle>
      <Button primary text="me first" />
      <Button text="me second" />
      <Icon border='solid 3px' statusColor={'ready'} />
      <Icon status={'in-progress'} />
      <ParagraphTitle as={ReversedTitle}>I am a paragraph</ParagraphTitle>
    </Section>
  )
}

export default Content;
