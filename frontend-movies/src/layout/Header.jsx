import classes from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <h2>Movie World</h2>

      <Container>
        <Row>
          <Col>
            <Link className={classes.link} to="/">
              Popular Movies
            </Link>
          </Col>
          <Col>
            <Link className={classes.link} to="/add-expense">
              Favourites
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
