import { Container, Row } from "react-bootstrap";
import { Header } from "../molecules/login/Header";
import { Card } from "../organisms/auth/Card";
import { Badge } from "../molecules/auth/Badge";
import { FormLogin } from "../organisms/login/FormLogin";

export const Loginpage = () => {
    return (<section className="position-relative">
        <Container>
            <Header />
            <Row className="d-flex justify-content-center">
                <Card>
                    <Badge />
                    <FormLogin />
                </Card>
            </Row>
        </Container>
    </section>);
};