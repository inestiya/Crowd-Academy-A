import React, { Component } from "react";
import { render } from "react-dom";
import { Container, Tab, Table, Segment } from "semantic-ui-react";
import styled from "styled-components";
import Artikel from "../page/Artikel";
import Kelas from "../page/Kelas"

const Read = styled.a`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

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
        <Artikel />
        ),
      },
      {
        menuItem: "Kelas Pelatihan",
        render: () => (
        <Kelas />
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
