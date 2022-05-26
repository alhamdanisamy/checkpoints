import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
export const TeamMember = ({
  first_name = "abdelkader",
  last_name = "",
  profession,
  image
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} style={{ maxHeight: "172px" }} />
      <Card.Body>
        <Card.Title>
          {first_name} {last_name}
        </Card.Title>
        <Card.Text>{profession}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

TeamMember.propTypes = {
  first_name: PropTypes.string.isRequired
};
