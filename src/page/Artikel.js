import React, { useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import styled from "styled-components";

/* Function with hook*/
const Artikel = () => {
  const [kategori, setKategori] = useState("IT & Data");
  const [judul, setJudul] = useState("Introduction to Go Lang");
  const [postingDate, setkategori] = useState("17 Juli 2021");
  const [ditulisOleh, setDitulisOleh] = useState("Sandy");
  const [isiArtikel, setIsiArtikel] = useState(
    "Go Lang merupakan bahasa pemrogr... "
  );

  const StyledGrid = styled(Grid)`
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    box-shadow: 0.1rem 0.1rem lightgray;
    margin: 2rem 0 !important;
  `;

  const StyledGridRow = styled(Grid.Row)`
    padding: 1rem !important;
  `;

  const Read = styled.a`
    margin-left: 0.5rem;
    font-size: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
  `;

  /*combine UI Framework with styled components*/
  return (
    <Container>
      <StyledGrid>
        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Kategori</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={3}>
            <span>{kategori}</span>
          </Grid.Column>
        </StyledGridRow>

        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Judul</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={3}>
            <span>{judul}</span>
          </Grid.Column>
        </StyledGridRow>

        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Posting Date</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={3}>
            <span>{postingDate}</span>
          </Grid.Column>
        </StyledGridRow>

        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Ditulis Oleh</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={3}>
            <span>{ditulisOleh}</span>
          </Grid.Column>
        </StyledGridRow>

        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Isi Artikel</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={5}>
            <span>{isiArtikel}</span>
            <Read href="_blank">read</Read>
          </Grid.Column>
        </StyledGridRow>
      </StyledGrid>

      <StyledGrid>
        <StyledGridRow>
          <Grid.Column>
            <span>Isi Artikel 2 dan Seterusnya</span>
          </Grid.Column>
        </StyledGridRow>
      </StyledGrid>
    </Container>
  );
};

export default Artikel;
