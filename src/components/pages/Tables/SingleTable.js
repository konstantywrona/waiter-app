import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Container, Button } from 'react-bootstrap';

const SingleTable = () => {
  const { id } = useParams();
  const tableId = useSelector((state) => getTableById(state, id));

  return (
    <>
      <h1>Table {tableId.id}</h1>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col>
            <p>
              <b>Status: </b> {tableId.status}
            </p>
            <p>
              <b>People:</b> {tableId.peopleAmount} / {tableId.maxPeopleAmount}
            </p>
            <p>
              <b>Bill:</b> {tableId.bill}
            </p>
            <Link to={'/'}>
              <Button variant="primary">Update</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleTable;
