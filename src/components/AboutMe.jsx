import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import RH from "../images/7star.JPG";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);
  

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>{bio}</p>
                 <p>1. Team-oriented, Product-oriented, Detail-oriented, Innovative quality-oriented and highly experienced senior
                    software engineer with 9+ years of experience.</p> 
                    <p>2. Adept in bringing forth expertise in design, developing, testing
                    and maintaining of web and mobile applications including E-commerce, HealthCare, Fintech, Spectator Sports,
                    Hospitality.</p>
                    <p>3. Proven track record of successful products and history of excellence across multiple companies.
                    Dedicated team player with successful team collaboration and strong commitment for driving company success
                    and growing revenue.</p>
                    <p>4. With the aim “optimize everything more efficient and perfect” and "Teamwork makes the dream work".</p> 
                    <p>Eager and ready to leverage expertise to best serve your company as a React expert, Vue expert, Angular expert, Node
                    expert, Database expert, Frontend engineer, Backend engineer, Full stack engineer.
                  </p>
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={RH}
                alt="Rate 7 star"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
