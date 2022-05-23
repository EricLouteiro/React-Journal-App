import { Button, Card, Container, Row, Spacer, Text } from "@nextui-org/react";
import { motion } from "framer-motion";

export const MainCard = () => {
  return (
    <Container className="main-container first-card">
      <Card
        className="card-gradient"
        css={{
          dflex: "center",
          alignItems: "flex-start",
          pl: "85px",
          boxShadow: '0 0 15px grey'
        }}
      >
        <Card.Image
          src="https://depor.com/resizer/ha2g-F4XjfjshK-tQ61PeC3O1Qg=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6NEBOMDICREDVG2U6LPZF5H3CY.jpg"
          objectFit="cover"
          className="card-img"
          width="400px"
          height="200px"
          css={{
            pr: "85px",
          }}
        />
        <Card.Body css={{ h: "content" }}>
          <Text h1 size={70} color="white">
            I'm Eric Louteiro{" "}
          </Text>
          <Text size={20} color="white">
            {" "}
            - Knowledge is power
          </Text>
          <Spacer y={4} />
          <Row justify="flex-start">
            <motion.div
              whileHover={{
                transition: ".4s ease",
                y: -5,
              }}
            >
              <Button
                className="btn-animate"
                rounded
                css={{ h: 50, bc: "#ff5959" }}
              >
                View Portfolio
              </Button>
            </motion.div>
            <Spacer x={3} />
            <motion.div
              whileHover={{
                transition: ".4s ease",
                y: -5,
              }}
            >
              <Button
                rounded
                bordered
                className="btn-animate2"
                color=""
                size="sm"
                css={{
                  bgBlur: "#4a63e7",
                  h: 50,
                  color: "White",
                  borderBlockColor: "White",
                }}
              >
                View
              </Button>
            </motion.div>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
