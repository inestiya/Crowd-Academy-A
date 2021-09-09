import React from "react";
import { useHistory } from "react-router-dom";
import { Container,Grid, Menu } from "semantic-ui-react";

const Content = () => {
  const history = useHistory();
  return (
    <div className="App">
  <Container style={{ marginTop: '5em'}}>
    <Grid columns={6} doubling>
      <Grid.Column>
        <Menu
          pointing
          secondary
        >
        <Menu.Item onClick={() => history.push("/artikel")}>
          Artikel
        </Menu.Item>
        <Menu.Item onClick={() => history.push("/kelas")}>
          Kelas Pelatihan
        </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
    </Container>
    </div>
  );
};

export default Content;
