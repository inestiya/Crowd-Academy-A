import React from "react";
import styled from "styled-components";

/* Styled Component semantic HTML */
const Wrapper = styled.main`
  width: 100%;
  color: #000000;
`;

const Card = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 166%;
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
    else if (position === "2") return "11.3rem";
    else if (position === "3") return "14.85rem";
    else if (position === "4") return "14.15rem";
    else return "13.15rem;";
  }};
`;

const TextWrapper = styled.article`
  margin-top: -8rem;
`;

class Kelas extends React.Component {
  constructor() {
    super();
    this.state = {
      jenis_kelas: "Gratis",
      topik_pembelajaranl: "IT & Data",
      judul_kelas: "Promgramming with Phyton",
      jadwal_kelas: "17 Juli 2021, 10.00 WIB",
      deskripsi_kelas: "Phyton adalah bahasa pemogramman yang .... ",
    };
  }

  render() {
    return (
      <Wrapper>
        <Card>
          <TextWrapper>
            <Text>
              Jenis Kelas<Colon position="1"> : </Colon> {this.state.jenis_kelas}
            </Text>
            <Text>
              Topik Pembelajaran<Colon position="2"> : </Colon> {this.state.topik_pembelajaranl}
            </Text>
            <Text>
              Judul Kelas <Colon position="3"> : </Colon>
              {this.state.judul_kelas}
            </Text>
            <Text>
              Jadwal Kelas <Colon position="4"> : </Colon>
              {this.state.jadwal_kelas}
            </Text>
            <Text>
              Deskripsi Kelas<Colon position="5"> : </Colon>
              {this.state.deskripsi_kelas}
            </Text>
          </TextWrapper>
        </Card>

        <Card>
          <TextWrapper>
            <Text>Kelas 2 dan selanjutnya</Text>
          </TextWrapper>
        </Card>
      </Wrapper>
    );
  }
}

export default Kelas;