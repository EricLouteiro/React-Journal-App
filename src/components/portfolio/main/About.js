import {
  Avatar,
  Card,
  Col,
  Container,
  Text,
  Row,
  Spacer,
} from "@nextui-org/react";

export const About = () => {

  return (
    <Container className="main-container about-card" id='about'>
      <Card css={{ pt: 40, pl: 30, pb: 20 }}>
        <Card.Header>
          <Text h2 css={{zIndex: 1}}>About Me</Text>
        </Card.Header>
        <Spacer />
        <Card.Body css={{ pl: 0, pb: 40 }}>
          <Row css={{ pl: 0 }}>
            <Col css={{ w: "fit-content" }}>
              <Avatar
                bordered
                css={{ size: "150px", zIndex: 1 }}
                src="https://depor.com/resizer/ha2g-F4XjfjshK-tQ61PeC3O1Qg=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6NEBOMDICREDVG2U6LPZF5H3CY.jpg"
              />
            </Col>
            <Col css={{ alignItems: "flex-start", ml: 25 }}>
              <Text h2 b css={{ ml: 0 }}>
                {" "}
                Hello!{" "}
              </Text>
              <Text color="#989898" css={{ ml: 0 }}>
                I am Eric Louteiro, a Full-Stack Developer based on MERN Stack,
                I also have experience working with DevOps structure, making
                deploys on phisical local servers and cloud servers like Azure
                with CI/CD integrations and kubernetes.
              </Text>
              <Spacer />
              <Row justify="space-between">
                <Col>
                  <Text color="#989898" css={{ mb: 8 }}>
                    Name: <span style={{ color: "black" }}>Eric Louteiro</span>
                  </Text>
                  <Text color="#989898">
                    Birthday:{" "}
                    <span style={{ color: "black" }}>08 November, 1995</span>
                  </Text>
                </Col>
                <Col>
                  <Text color="#989898" css={{ mb: 8 }}>
                    Location:{" "}
                    <span style={{ color: "black" }}>Asuncion, PY</span>
                  </Text>
                  <Text color="#989898">
                    Email:{" "}
                    <span style={{ color: "black" }}>
                      ericlouteiro@gmail.com
                    </span>
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
