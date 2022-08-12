import classes from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const checkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={classes.header}>
      <h2>Movie World</h2>

      <Container>
        <Row>
          <Col className={checkActive("/") && classes.active}>
            <Link className={classes.link} to="/">
              Popular Movies
            </Link>
          </Col>
          <Col className={checkActive("/favourites") && classes.active}>
            <Link className={classes.link} to="/favourites">
              Favourites
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
