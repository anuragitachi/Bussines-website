//This is home page, It will contains all the sections require in this page.

//Import all the require sections here

import styled from "styled-components";
import {MainSection} from './MainSection';
import {Contact } from '../contact/Contact';
import {About} from '../About/About'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

export const Home: React.FC = () => {
  return (
    <Container>
    <MainSection />
    <About/>
    <Contact />
    </Container>
  );
};

export default Home;
