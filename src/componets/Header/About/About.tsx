import styled, { keyframes } from "styled-components";
import wave from "../../../assets/waves.svg";
import about from "../../../assets/About-Us.png";
import Work from "../../../assets/Blogging.png";
import hand from "../../../assets/hand.svg";
const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;
const AboutSection = styled.section`
 width:100vw;
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;
const Waves = styled.img`
width: 100%;
height: auto;
position: absolute;
top: -1rem;
`;
const Hand = styled.div`
position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
margin: 0 15rem;
margin-top: 15rem;
display: flex;
justify-content: center;
flex-direction: column;
@media only Screen and (max-width: 64em) {
  margin: 0 calc(5rem + 5vw);
  margin-top: 10rem;
}
@media only Screen and (max-width: 40em) {
  align-items: center;
  margin: 3rem calc(3rem + 3vw);
}
`;

const Title = styled.h1`
font-size: 2rem;
display: inline-block;
`;


const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const AboutIcon = styled.div`
display: flex;
justify-content: center;
align-content: center;
width: 40%;
padding-bottom: 5rem;

@media only Screen and (max-width: 40em) {
  width: 50vw;
  padding-bottom: 0;
}
`;

const Works = styled.div`
width: 50%;
position: absolute;
right: 0;
bottom: 100%;
animation: ${move} 2.5s ease infinite;
@media only Screen and (max-width: 40em) {
  display: none;
}
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;
export const About: React.FC = () => {
    return (
      <AboutSection id="about">
        <Waves src={wave} alt="" />
        {/* <Hand>
          <img src={hand} alt="" />
        </Hand> */}
        <Main>
          <div>
            <Title>About Us</Title>
            <CurvedLine />
          </div>
          <Content>
            <AboutIcon>
              <img src={about} alt="" width="400" height="400" />
            </AboutIcon>
            <AboutText>
              <Works>
                <img src={Work} alt="" width="400" height="400" />
              </Works>
  
              <Text>
              Welcome to our platform, where we empower individuals and businesses to share their unique stories, 
              thrive, and distinguish themselves in today's dynamic digital landscape. 
              Through our innovative projects, we assist our clients in effectively communicating their brand identity,
               attracting and engaging their target audience, and ultimately, driving meaningful growth..
              </Text>
              <div>
                <Circle style={{ backgroundColor: "var(--purple)" }} />
                <Circle style={{ backgroundColor: "var(--pink)" }} />
                <Circle style={{ backgroundColor: "var(--black)" }} />
              </div>
            </AboutText>
          </Content>
        </Main>
      </AboutSection>
    );
  };
  
  export default About;