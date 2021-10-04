import React, { useState } from "react";

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
  Message,
} from "semantic-ui-react";
import { instance } from "../api/instance.js";
import Success from "../component/Success.js";
import "../App.js";

import RegisterFormLogo from "../assets/logo-CA-background2.png";

function RegisterForm(props) {
  const registerOptions = [
    { key: "learner", value: "1", text: "Learner" },
    { key: "tutor", value: "2", text: "Tutor" },
  ];

  const [iserror, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationpassword, setValidationPassword] = useState("");
  const [registerAs, setRegisterAs] = useState("");

  // const loginProps = (props) => {
  //   props.onLogin();
  // };

  const onRegister = () => {
    instance
      .post("/register", {
        username: username,
        password: password,
        register_as: registerAs,
      })
      .then(() => {
        return <Success />;
      })
      // .then(loginProps)
      .catch(setIsError(true));
  };

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
              <Form>
                <Form.Field>
                  <label>Username (Email)</label>
                  <input
                    placeholder="Isi username atau email"
                    type="email"
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    type="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Konfirmasi Password</label>
                  <input
                    placeholder="Isi Ulang Password"
                    type="Password"
                    onChange={(event) =>
                      setValidationPassword(event.target.value)
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label>Register Sebagai</label>
                  <Select
                    placeholder="Register Sebagai"
                    options={registerOptions}
                    onChange={(_, data) => setRegisterAs(data.value)}
                  />
                </Form.Field>

                <Button fluid primary onClick={onRegister}>
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
                <a onClick={() => props.onLoginClick()}> Login </a>
              </div>
            </Segment>
            {iserror ? (
              <Message negative>
                <Message.Header>Upsss...</Message.Header>
                <p>Tidak bisa melakukan registrasi. Cek kembali isian Anda.</p>
              </Message>
            ) : (
              <Success />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default RegisterForm;
