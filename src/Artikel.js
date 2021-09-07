import React from "react";
import styled from "styled-components";

/* Styled Component semantic HTML */
const Wrapper = styled.main`
  width: 100%;
  color: #000000;
`;

const Card = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 90%;
  padding: 10rem 0rem;
  margin: 2rem 1rem;
`;

const Text = styled.p`
  margin: 1.2rem;
`;

const Colon = styled.span`
  margin-right: 2rem;
  margin-left: ${({ position }) => {
    if (position === "1") return "15rem";
    else if (position === "2") return "16.4rem";
    else if (position === "3") return "13rem";
    else if (position === "4") return "13.6rem";
    else return "14.7rem;";
  }};
`;

const Read = styled.a`
  margin-left: 0.5rem;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

const TextWrapper = styled.article`
  margin-top: -8rem;
`;

class Artikel extends React.Component {
  constructor() {
    super();
    this.state = {
      kategori: "IT & Data",
      judul: "Introduction to Go Lang",
      postingDate: "17 Juli 2021",
      ditulisOleh: "Sandy",
      isiArtikel: "Go Lang merupakan bahasa pemrogr... ",
    };
  }

  render() {
    return (
      <Wrapper>
        <Card>
          <TextWrapper>
            <Text>
              Kategori<Colon position="1"> : </Colon> {this.state.kategori}
            </Text>
            <Text>
              Judul<Colon position="2"> : </Colon> {this.state.judul}
            </Text>
            <Text>
              Posting Date <Colon position="3"> : </Colon>
              {this.state.postingDate}
            </Text>
            <Text>
              Ditulis Oleh <Colon position="4"> : </Colon>
              {this.state.ditulisOleh}
            </Text>
            <Text>
              Isi Artikel<Colon position="5"> : </Colon>
              {this.state.isiArtikel}
              <Read href="_blank">read</Read>
            </Text>
          </TextWrapper>
        </Card>

        <Card>
          <TextWrapper>
            <Text>Isi Artikel 2 dan Seterusnya</Text>
          </TextWrapper>
        </Card>
      </Wrapper>
    );
  }
}

export default Artikel;
