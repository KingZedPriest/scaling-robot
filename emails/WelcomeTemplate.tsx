/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type emailProps = {
  userName?: string,
}

export default function WelcomeTemplate({userName}:  emailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <img src="https://res.cloudinary.com/dpmx02shl/image/upload/v1705963876/logo_ef4cdl.svg" alt="Capital Sphere Logo" />
          <Text style={heading}>Hi {userName}!</Text>
          <Text style={paragraph}>Welcome to our app!</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  border: "1px solid #B2B3BA",

};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

