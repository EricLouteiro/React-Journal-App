import { Container, Link } from "@nextui-org/react";

export const SocialButtons = () => {
  return (
    <Container justify="space-evenly" css={{ pr: 0, pl: 0 }}>
      <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
        <li>
          <Link href="https://github.com/EricLouteiro" target="_blank">
            <i className="fa-brands fa-github sd-button-i sd-button-i-social"></i>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/EricLouteiro" target="_blank">
            <i className="fa-brands fa-facebook sd-button-i sd-button-i-social"></i>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/EricLouteiro" target="_blank">
            <i className="fa-brands fa-linkedin-in sd-button-i sd-button-i-social"></i>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/EricLouteiro" target="_blank">
            <i className="fa-brands fa-twitter sd-button-i sd-button-i-social"></i>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/EricLouteiro" target="_blank">
            <i className="fa-brands fa-instagram sd-button-i sd-button-i-social"></i>
          </Link>
        </li>
      </ul>
    </Container>
  );
};
