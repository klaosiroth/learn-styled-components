import './App.css';
import styled from 'styled-components';
import Content from './components/Content';
import Section from './components/Section';

const Title = styled.h1`
  color: #b19cd9;
`;

function App() {
  return (
    <>
      <Title>Progress Tracker</Title>
      <div>
        <Section text="M" day={1} progress='100%' />
        <Section text="T" day={2} progress='80%' />
        <Section text="W" day={3} progress='70%' />
        <Section text="T" day={4} progress='60%' />
        <Section text="F" day={5} progress='50%' />
        <Section text="S" day={6} progress='40%' />
        <Section text="S" day={0} progress='30%' />
      </div>
      
      <Content />
    </>
  );
}

export default App;
