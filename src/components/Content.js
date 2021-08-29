import styled from 'styled-components';
import Button from './Button';
import Icon from './Icon';

const Section = styled.section`
  background-color: #aac9f0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
`

const Title = styled.h1`
  color: #aaecf0;
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
      <Title>💅🏻 Section</Title>
      <SubTitle>I am a subtitle</SubTitle>
      <Button primary text="me first" />
      <Button text="me second" />
      <Icon primary border='solid 3px' />
      <Icon />
      <ParagraphTitle as={ReversedTitle}>I am a paragraph</ParagraphTitle>
    </Section>
  )
}

export default Content;
