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

const Content = () => {
  return (
    <Section>
      <Title>💅🏻 Section</Title>
      <Button primary text="me first" />
      <Button text="me second" />
      <Icon primary />
      <Icon />
    </Section>
  )
}

export default Content;