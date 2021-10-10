import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Select,
  Icon,
} from "semantic-ui-react";
import "../App.js";

import RegisterFormLogo from "../assets/logo-CA-background2.png";

function RegisterForm(props) {
  const registerOptions = [
    { key: "tutor", value: "tutor", text: "Tutor" },
    { key: "learner", value: "learner", text: "Learner" },
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid style={{ marginLeft: "15vw" }}>
        <Grid.Row>
          <Grid.Column>
            <Image src={RegisterFormLogo} size="medium" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment size="medium" style={{ width: "30vw" }} raised>
              <Header style={{ display: "flex", justifyContent: "center" }}>
                Register
              </Header>
              <Form id="query-form">
                <Form.Field>
                  <label>Username (Email)</label>
                  <input placeholder="Isi username atau email" type="email" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder="Password" type="Password" id="password"/>
                </Form.Field>
                <Form.Field>
                  <label>Konfirmasi Password</label>
                  <input placeholder="Isi Ulang Password" type="Password" id="re-password" />
                </Form.Field>
                <Form.Field id="action-select">
                  <label>Register Sebagai</label>
                  <Select id="action-select"
                    placeholder="Register Sebagai"
                    options={registerOptions}
                  />
                </Form.Field>

                <Button fluid primary>
                  Daftar
                </Button>
              </Form>
              <Divider horizontal>atau</Divider>
              <Button fluid color="google plus">
                <Icon name="google plus" />
                Daftar dengan Gmail
              </Button>
              <br></br>
              <div style={{ cursor: "pointer" }}>
                Sudah punya akun?{" "}
                <Link to="/login">
                <a onClick> Login </a>
                </Link>
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default RegisterForm;
