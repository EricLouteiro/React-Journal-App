import { Col, Container, Row, Spacer, Text, User } from "@nextui-org/react";
import { SidebarButtons } from "./SidebarButtons";
import { SocialButtons } from "./SocialButtons";

export const Sidebar = () => {
  return (
    <Container
      display="flex"
      direction="column"
      className="sidebar-container"
      css={{
        pl: 35,
        pr: 50,
        ml: 15,
      }}
    >
      <User
        bordered
        size="xl"
        src="https://depor.com/resizer/ha2g-F4XjfjshK-tQ61PeC3O1Qg=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6NEBOMDICREDVG2U6LPZF5H3CY.jpg"
        color="warning"
        css={{
          mt: 36,
          pl: 0,
        }}
      />
      <Spacer />
      <Col>
        <Row css={{ mb: -8 }}>
          <Text
            h3
            color="#fff"
            css={{
              ml: 0,
              mb: 0,
            }}
          >
            Eric Louteiro
          </Text>
        </Row>
        <Row>
          <Text color="#e1e8ed">FullStack Developer </Text>
        </Row>
        <Spacer y={2} />
        <SidebarButtons />

        <Spacer y={3} />

        <SocialButtons />
      </Col>
    </Container>
  );
};
