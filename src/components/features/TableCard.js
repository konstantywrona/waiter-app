import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';

const TableCard = (props) => {
  return (
    <>
      <Container className="m-5">
        <Row>
          <Col>
            <b style={{ fontSize: '28px' }}>Table {props.id}</b>
          </Col>
          <Col xs={8} style={{ marginTop: '10px' }}>
            <b>Status:</b> {props.status}
          </Col>

          <Col xs={2}>
            <Link key={props.id} to={'' + props.id}>
              <Button variant="primary">Show more</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TableCard;
