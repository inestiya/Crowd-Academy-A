import React from 'react'
import { Container, Segment, Table, TableHeaderCell, TableRow, } from 'semantic-ui-react'

const Kelas = () => (
  <Container style={{ marginTop: '2em'}}>
    <Segment>
    <Table style={{border: 0}}>
    <Table.Body style={{border: 0}}>
      <Table.Row style={{border: 0}}>
        <Table.Cell>Jenis Kelas</Table.Cell>
        <Table.Cell style={{width: 1}}>:</Table.Cell>
        <Table.Cell style={{textAlign: 'left'}}>Gratis</Table.Cell>
      </Table.Row>
      <Table.Row style={{border: 0}}>
        <Table.Cell>Topik Pembelajaran</Table.Cell>
        <Table.Cell>:</Table.Cell>
        <Table.Cell style={{textAlign: 'left'}}>IT dan Data</Table.Cell>
      </Table.Row>
      <Table.Row style={{border: 0}}>
        <Table.Cell>Judul Kelas</Table.Cell>
        <Table.Cell>:</Table.Cell>
        <Table.Cell style={{textAlign: 'left'}}>Programming with Python</Table.Cell>
      </Table.Row>
      <Table.Row style={{border: 0}}>
        <Table.Cell>Jadwal Kelas</Table.Cell>
        <Table.Cell>:</Table.Cell>
        <Table.Cell style={{textAlign: 'left'}}>17 Juli 2021, 10.00 WIB</Table.Cell>
      </Table.Row>
      <Table.Row style={{border: 0}}>
        <Table.Cell>Deskripsi Kelas</Table.Cell>
        <Table.Cell>:</Table.Cell>
        <Table.Cell style={{textAlign: 'left'}}>Python adalah bahasa pemogramman yang ........................</Table.Cell>
      </Table.Row>
    </Table.Body>
    </Table>
    </Segment>
    <Segment>
      <Table style={{border: 0,}}>
      <p>Kelas 2 dan selanjutnya</p>
      </Table>
    </Segment>
  </Container>
)

export default Kelas;
