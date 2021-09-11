import {  Button,  Divider,  Form,  Header,  Segment,  Message, Dropdown,  Icon,  Image,Grid} from "semantic-ui-react";
import { useState } from "react";
import "../App.js";
import LoginFormLogo from "../assets/logo.png";

function Login(props) {
  const friendOptions = [
    {
      key: "Tutor",
      text: "Tutor",
      value: "Tutor",
    },
    {
      key: "Leaner",
      text: "Leaner",
      value: "Leaner",
    },
  ];

  const [isError, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email === "timA@mail.com" && password === "password") {
      props.onLogin();
    } else {
      setError(true);
    }
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
            <Image src={LoginFormLogo} size="medium" />
          </Grid.Column>
        </Grid.Row>
      <Grid.Row>
          <Grid.Column>
      <Segment size="medium" style={{ width: "30vw" }} raised>
        <Header style={{ display: "flex", justifyContent: "center" }}>
          Login
        </Header>

        <Form>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email address"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Login sebagai</label>
            <Dropdown
              placeholder="-Login sebagai-"
              fluid
              selection
              options={friendOptions}
              onChange={(_, data) => console.log(data)}
            />
          </Form.Field>
          <div style={{ cursor: "pointer" }}>
            Belum punya akun?{" "}
            <a onClick={() => props.onRegisterFormClick()}> Register </a>
          </div>
          <br></br>
          <Button fluid primary onClick={onLogin}>
            login
          </Button>
        </Form>

        <Divider horizontal>ATAU</Divider>
        <Button fluid color="google plus">
            <Icon name="google plus" />
            Login dengan Email
        </Button>
        <br></br>
        <Button fluid color="facebook">
          <Icon name="facebook" /> Facebook
        </Button>
      </Segment>
      {isError ? (
        <Message negative>
          <Message.Header>Wrong credentials</Message.Header>
          <p>Wrong combination of email and password!</p>
        </Message>
      ) : null}
      </Grid.Column>
      </Grid.Row>
      </Grid>
    </div>
  );
}

export default Login;
