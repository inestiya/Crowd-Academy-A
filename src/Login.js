import { Button, Container, Divider, Form, Header, Segment } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";

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

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center" }}>
      <Segment size="medium" style={{ width: "30vw" }} raised>
        <Header>Login</Header>

        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email address" type="text"></input>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" type="password"></input>
          </Form.Field>
          <Form.Field>
            <label>Login sebagai</label>
            <Dropdown placeholder="-Login sebagai-" fluid selection options={friendOptions} />
          </Form.Field>
          <div>
            Belum punya akun? <a onClick={() => props.onRegisterFormClick()}> Register </a>
          </div>
          <br></br>
          <Button fluid primary>
            login
          </Button>
        </Form>

        <Divider horizontal>ATAU</Divider>
        <Button secondary fluid>
          Masuk menggunakan google
        </Button>
        <br></br>
        <Button secondary fluid>
          Masuk menggunakan facebook
        </Button>
        <br></br>
        <Button secondary fluid>
          Masuk menggunakan twitter
        </Button>
      </Segment>
    </div>
  );
}

export default Login;
