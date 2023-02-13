import { Container,Row,Col,Card } from "react-bootstrap";
const SignUp=()=>{
return(
   
        <Container>
            <Row>
                <Col>
                <Card>
                <Card.Body>
                    <label>Email</label>
                    <input type='email' required/>
                    <label>Password</label>
                    <input type='password' required/>
                    <input type='password' required/>
                    <button>Sign Upe</button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
   
)
}
export default SignUp;