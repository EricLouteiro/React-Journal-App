import { Button, Col, Input, Row, Spacer, Textarea } from "@nextui-org/react";
import React from "react";

export const ContactFoms = () => {
  return (
    <form>
      <Col>
        <Row>
          <Input
            bordered
            rounded
            labelPlaceholder="Your Name"
            color="primary"
            css={{ width: "50%" }}
          />

          <Input
            bordered
            rounded
            labelPlaceholder="Email Address"
            color="primary"
            css={{ width: "50%", ml: "20px" }}
          />
        </Row>
        <Spacer y={2} />
        <Row>
          <Input
            bordered
            rounded
            labelPlaceholder="Subject"
            color="primary"
            css={{ width: "100%" }}
          />
        </Row>
        <Spacer y={2} />
        <Row>
          <Textarea
            bordered
            labelPlaceholder="Message"
            rows={8}
            color="primary"
            css={{ width: "100%", h: "100%" }}
            type="text"
          />
        </Row>
        <Spacer y={2} />

        <Button type="submit" className="btn-animate" rounded css={{ h: 40, bc: "#ff5959" }}>
          Send Message
        </Button>
      </Col>
    </form>
  );
};
