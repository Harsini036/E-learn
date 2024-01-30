import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card1 from "./Card1";

function Container1() {
  return (
    <Container className="container1">
      <Row className="row1">
        <Col md={6} lg={3}>
          <Card1
            src="bg-small.jpg"
            title="Web Development"
            content="Enroll in a comprehensive web development course to master HTML, CSS, JavaScript, and more."
            id="1"
          />
        </Col>
        <Col md={6} lg={3}>
          <Card1
            src="app.jpg"
            title="App Development"
            content="Join an app development course to learn how to create mobile applications for iOS and Android platforms."
            id="2"
          />
        </Col>
        <Col sm={6} lg={3}>
          <Card1
            src="cyber.jpg"
            title="Cyber security"
            content="Enroll in a cybersecurity course to gain expertise in protecting digital assets, identifying vulnerabilities, and securing networks and systems."
            id="3"
          />
        </Col>
        <Col sm={6} lg={3}>
          <Card1
            src="Data.png"
            title="Data Analytics"
            content="Take a data analytics course to learn how to extract insights from data, perform statistical analysis, and make data-driven decisions."
            id="4"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Container1;
