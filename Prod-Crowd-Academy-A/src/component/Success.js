import { Message } from "semantic-ui-react";

function Success() {
  return (
    <Message
      success
      header="Your user registration was successful"
      content="You may now log-in with the username you have chosen"
    />
  );
}

export default Success;