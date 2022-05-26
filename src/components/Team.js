import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { ourTeamData } from "../data";
import { TeamMember } from "./TeamMember";
export const Team = () => {
  return (
    <Container className="team" id="team">
      <Row>
        <h1>Our team</h1>
      </Row>

      <Row>
        {ourTeamData &&
          ourTeamData.map((member) => {
            return (
              <Col md={3} key={member.id}>
                <TeamMember
                  first_name={member.first_name}
                  last_name={member.last_name}
                  profession={member.profession}
                  image={member.image}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};
