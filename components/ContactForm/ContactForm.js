import { Container, Content, Animation, Form } from "./style";
import { useForm, ValidationError } from "@statickit/react";
import KitForm from "./Form/Form";

export default function Contact() {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <p
        style={{
          fontSize: "16px",
          margin: "30px",
          color: "white",
          textAlign: "center",
        }}
      >
        Thanks, I'll get in touch with you as soon as possible.
      </p>
    );
  }

  return (
    <Container>
      <Content>
        <Animation>
          <h4>Get in touch</h4>
        </Animation>
        <p>How can we help you?</p>
        <KitForm />
      </Content>
    </Container>
  );
}
