import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Tab, Table, Segment } from "semantic-ui-react";

class Content extends Component {
  state = { activeIndex: 1 };

  handleRangeChange = (e) => this.setState({ activeIndex: e.target.value });
  handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex });

  render() {
    const { activeIndex } = this.state;

    const panes = [
      {
        menuItem: "Artikel",
        render: () => (
          <Tab.Pane>
            <Container style={{ marginTop: "2em" }}>
              <Segment>
                <Table style={{ border: 0 }}>
                  <Table.Body style={{ border: 0 }}>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Kategori</Table.Cell>
                      <Table.Cell style={{ width: 1 }}>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        IT & Data
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Judul</Table.Cell>
                      <Table.Cell>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        Introduction to Go Lang
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Posting Date</Table.Cell>
                      <Table.Cell>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        17 Juli 2021
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Ditulis Oleh</Table.Cell>
                      <Table.Cell>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        Sandy
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Isi Artikel</Table.Cell>
                      <Table.Cell>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        Go Lang merupakan bahasa pemrogr ...{" "}
                        <text>Read more</text>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
              <Segment>
                <Table style={{ border: 0 }}>
                  <p>Isi Artikel 2 dan Seterusnya</p>
                </Table>
              </Segment>
            </Container>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Kelas Pelatihan",
        render: () => (
          <Tab.Pane>
            <Container style={{ marginTop: "2em" }}>
              <Segment>
                <Table style={{ border: 0 }}>
                  <Table.Body style={{ border: 0 }}>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Jenis Kelas</Table.Cell>
                      <Table.Cell style={{ width: 1 }}>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        Gratis
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Topik Pembelajaran</Table.Cell>
                      <Table.Cell>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        IT dan Data
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Judul Kelas</Table.Cell>
                      <Table.Cell>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        Programming with Python
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Jadwal Kelas</Table.Cell>
                      <Table.Cell>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        17 Juli 2021, 10.00 WIB
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row style={{ border: 0 }}>
                      <Table.Cell>Deskripsi Kelas</Table.Cell>
                      <Table.Cell>:</Table.Cell>
                      <Table.Cell style={{ textAlign: "left" }}>
                        Python adalah bahasa pemogramman yang ...
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
              <Segment>
                <Table style={{ border: 0 }}>
                  <p>Kelas 2 dan selanjutnya</p>
                </Table>
              </Segment>
            </Container>
          </Tab.Pane>
        ),
      },
    ];

    return (
      <div>
        <div>activeIndex: {activeIndex}</div>
        <input
          type="range"
          max="1"
          value={activeIndex}
          onChange={this.handleRangeChange}
        />
        <Tab
          panes={panes}
          activeIndex={activeIndex}
          onTabChange={this.handleTabChange}
        />
      </div>
    );
  }
}

export default Content;

const App = () => (
  <Container>
    <Content />
  </Container>
);

render(<App />, document.getElementById("root"));
