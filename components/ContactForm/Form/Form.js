import { useForm, ValidationError } from "@statickit/react";
import styled from "styled-components";

const Form = styled.form`
  text-align: center;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 5px;
  align-items: stretch;
  justify-content: stretch;
  margin-top: 20px;

  input {
    font-size: 16px;
    border: 1px solid #d8d8d8;
    padding: 15px;
    border-radius: 8px;
    background: #fff;
    color: black;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  textarea {
    font-size: 16px;
    border: 1px solid #e7e7ff;
    padding: 15px;
    border-radius: 8px;
    background: #fff;
    color: black;
    height: 120px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  button {
    padding: 20px;
    background: blue;
    font-size: 16px;
    font-weight: bold;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 6px;
  }
`;

export default function KitForm() {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return (
      <p
        style={{
          fontSize: "16px",
          margin: "30px",
          color: "black",
          textAlign: "center",
        }}
      >
        Thanks for reaching out!
      </p>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        type="name"
        placeholder="Your name"
        required
      />
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your email"
        required
      />
      <textarea id="message" name="message" placeholder="Message" />
      <ValidationError prefix="Name" field="name" erros={state.errors} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Send
      </button>
    </Form>
  );
}
