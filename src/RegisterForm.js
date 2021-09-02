import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Select,
} from "semantic-ui-react";

import RegisterFormLogo from "./assets/register-logo-dummy.png";

function RegisterForm() {
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
            <Image src={RegisterFormLogo} size="small" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment size="medium" style={{ width: "30vw" }} raised>
              <Header>Register</Header>
              <Form>
                <Form.Field>
                  <label>Username (Email)</label>
                  <input placeholder="Isi username atau email" type="email" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder="Password" type="Password" />
                </Form.Field>
                <Form.Field>
                  <label>Konfirmasi Password</label>
                  <input placeholder="Isi Ulang Password" type="Password" />
                </Form.Field>
                <Form.Field>
                  <label>Login Sebagai</label>
                  <Select
                    placeholder="Login Sebagai"
                    options={registerOptions}
                  />
                </Form.Field>
                <Button fluid primary>
                  Daftar
                </Button>
              </Form>
              <Divider horizontal>atau</Divider>
              <Button secondary fluid>
                Daftar dengan Email
              </Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default RegisterForm;
