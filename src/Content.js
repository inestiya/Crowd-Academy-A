import React from "react";

const Content = () => {
  return (
    <div className="App">
  <Container style={{ marginTop: '5em'}}>
    <Grid columns={6} doubling>
      <Grid.Column>
        <Menu
          items={[
            { key: '1', name: 'Artikel', content: 'Artikel' },
            { key: '2', name: 'Kelas', content: 'Kelas Pelatihan' },
          ]}
          pointing
          secondary
        />
      </Grid.Column>
    </Grid>
    </Container>
    </div>
  );
};

export default Content;
