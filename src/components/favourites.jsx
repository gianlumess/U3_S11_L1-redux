import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { Trash2Fill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouriteElements = useSelector((state) => state.preferiti.content);
  const dispatch = useDispatch();
  return (
    <>
      <Link to="/">
        <Button>Torna alla Home</Button>
      </Link>

      <Row className="d-flex justify-content-center mt-5">
        <Col xs={3}>
          <ListGroup>
            {favouriteElements.map((preferito, index) => (
              <ListGroup.Item className="d-flex justify-content-between" key={index}>
                {preferito}
                <div
                  className="btn btn-outline-danger"
                  onClick={() => {
                    dispatch({ type: "REMOVE_TO_FAVOURITES", payload: preferito });
                  }}
                >
                  <Trash2Fill />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default Favourites;
