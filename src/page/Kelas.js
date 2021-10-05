import React, {useEffect, useState } from "react";
import { Container, Grid, Message, Loader, Dimmer } from "semantic-ui-react";
import styled from "styled-components";
import { instance } from "../api/instance";

/* Function with hook*/

function Kelas() {
const [response, setResponse] = useState([]);
const [isLoading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true);
  instance
    .get("/list_kelas?id_tutor=1")
    .then((response) => {
      setLoading(false);
      setResponse(response.data.data)
    })
    .catch(() => {
      setLoading(false);
      <Message negative>Failed to fetch from server!</Message>
    });
}, []);


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
    <div>
    {isLoading ?   <Dimmer active><Loader content='Loading' /></Dimmer>  : null}
    {response && response.map((kelas) => {
      return (
        <div>
   <Container>
      <StyledGrid>
        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Jenis Kelas</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={3}>
            <span>{kelas.jenis_kelas}</span>
          </Grid.Column>
        </StyledGridRow>

        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Topik Pembelajaran</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={3}>
            <span>{kelas.topik_pembelajaran}</span>
          </Grid.Column>
        </StyledGridRow>

        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Judul Kelas</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={3}>
            <span>{kelas.judul_kelas}</span>
          </Grid.Column>
        </StyledGridRow>

        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Jadwal Kelas</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={3}>
          <span>{kelas.jadwal_kelas}</span>
          </Grid.Column>
        </StyledGridRow>

        <StyledGridRow>
          <Grid.Column width={6}>
            <span>Deskripsi Kelas</span>
          </Grid.Column>
          <Grid.Column width={1}>
            <span>:</span>
          </Grid.Column>
          <Grid.Column width={3}>
          <span>{kelas.deskripsi_kelas}</span>
          </Grid.Column>
        </StyledGridRow>
      </StyledGrid>

      <StyledGrid>
        <StyledGridRow>
          <Grid.Column>
            <span>Isi Kelas 2 dan Seterusnya</span>
          </Grid.Column>
        </StyledGridRow>
      </StyledGrid>
    </Container>
    </div>)}
    )}
    </div>
  );
};

export default Kelas;
