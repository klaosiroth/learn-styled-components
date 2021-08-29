import styled from 'styled-components';

const StyledSection  = styled.section`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`;

const WeekdayTitle  = styled.div`
  display: flex;
  justify-content: center;
  min-width: 50px;
  border-right: solid 3px lightgrey;
`;

// TO DO:
// extend the WeekdayTitle component to make a WeekendTitle component
// use the WeekendTitle if the text prop is an 'S'
const WeekendTitle = styled(WeekdayTitle)`
  background-color: lightgrey;
  border-radius: 7px 0 0 7px;
`;

// TO DO:
// make a ProgressBar component
// pass through a progress value
// make width dependant on progress value
// make color dependant on progress value
const ProgressSection = styled.div`
    width: 250px;
`

const ProgressBar = styled.div`
  background-color: ${({progress}) => {
    let numeric =  progress.slice(0,-1);
    let integer = parseInt(numeric);

    if (integer >= 80) return 'red';
    else if (integer >= 60) return 'orange';
    else if (integer >= 40) return 'yellow';
    else return 'green';
  }};
  height: 50px;
  width: ${ ({progress}) => progress || '0%' };
`

const TodayProgressBar = styled(ProgressBar)`
  background-color: purple;
`

const Section = ({ text, progress, day }) => {
  let today = new Date();
  let dayOfTheWeek = today.getDay();

  const isWeekend = text === "S";

  const isToday = day === dayOfTheWeek;

  return (
    <StyledSection>
      { !isWeekend && <WeekdayTitle>{text}</WeekdayTitle> }
      { isWeekend && <WeekendTitle>{text}</WeekendTitle> }

      <ProgressSection>
        {isToday && <TodayProgressBar progress={progress} />}
        {!isToday && <ProgressBar progress={progress}/>}
      </ProgressSection>
    </StyledSection>
  )
}

export default Section;
