import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

export default function Home() {
    return <div>
        <h1>Welcome to Your Health and Wellness Management Journey!</h1>
        <br />
        <Container>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Card>
                        <h2>Health</h2>
                        <p>Overall condition of a person's body and mind, including presence or absence of illness or injury.</p>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Card>
                        <h2>Wellness</h2>
                        <p>Optimal health and vitality. A proactive process that focuses on lifestyle choices and preventive measures to improve overall health.</p>
                    </Card>
                </Col>
            </Row>
        </Container>
        <br />
        <p>This is where you can get basic information about health and wellness in the following area:</p>
        <p>
            <Link to="/nutrition" style={{margin: "1rem"}}><strong>Nutrition</strong></Link>
            <Link to="/exercise" style={{margin: "1rem"}}><strong>Exercise</strong></Link>
            <Link to="/sleep" style={{margin: "1rem"}}><strong>Sleep</strong></Link>
        </p>
    </div>
};