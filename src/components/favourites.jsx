import { Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favouriteElements = useSelector((state) => state.preferiti.content);
  return (
    <>
      <Link to="/">
        <Button>Torna alla Home</Button>
      </Link>

      {favouriteElements.map((preferito, index) => {
        <ListGroup.Item key={index}>{preferito}</ListGroup.Item>;
      })}
    </>
  );
};

export default Favourites;
