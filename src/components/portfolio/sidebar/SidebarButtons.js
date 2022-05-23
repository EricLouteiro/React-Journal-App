import { Row, Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Link } from "react-scroll/modules";

export const SidebarButtons = () => {
  return (
    <ul className="sb-buttons sd-button-ul">
      <motion.li
        className="li-animate"
        whileHover={{ scale: 1.2  }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Link
          to='about' activeClass="active" spy={true} smooth={true} offset={-60} duration={500} style={{color: 'inherit'}}
        >
          <Row justify="space-between" align="center" >
            <i className="fa-solid fa-house sd-button-i" style={{color: "inherit"}} />
            <Text color="inherit">About</Text>
          </Row>
        </Link>
      </motion.li>
      <motion.li
        className="li-animate"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Link
          to='skills' activeClass="active" spy={true} smooth={true} offset={-60} duration={500} style={{color: 'inherit'}}
        >
          <Row justify="space-between" align="center">
            <i className="fa-solid fa-terminal sd-button-i" style={{color:'inherit'}}></i>
            <Text color="inherit">Skills</Text>
          </Row>
        </Link>
      </motion.li>
      <motion.li
        className="li-animate"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Link
          to='experience' activeClass="active" spy={true} smooth={true} offset={-60} duration={500} style={{color: 'inherit'}}
        >
          <Row justify="space-between" align="center">
            <i className="fa-solid fa-hourglass sd-button-i" style={{color:'inherit'}}></i>
            <Text color="inherit" css={{ ml: 5 }}>
              Experience
            </Text>
          </Row>
        </Link>
      </motion.li>
      <motion.li
        className="li-animate"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Link
          to='works' activeClass="active" spy={true} smooth={true} offset={-60} duration={500} style={{color: 'inherit'}}
        >
          <Row justify="space-between" align="center">
            <i className="fa-solid fa-briefcase sd-button-i" style={{color:'inherit'}}></i>
            <Text color="inherit">Works</Text>
          </Row>
        </Link>
      </motion.li>
      <motion.li
        className="li-animate"
        whileHover={{ scale: 1.2 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
      >
        <Link
          to='contact' activeClass="active" spy={true} smooth={true} offset={-60} duration={500} style={{color: 'inherit'}}
        >
          <Row justify="space-between" align="center">
            <i className="fa-solid fa-square-phone sd-button-i" style={{color:'inherit'}}></i>
            <Text color="inherit" css={{ ml: 3 }}>
              Contact
            </Text>
          </Row>
        </Link>
      </motion.li>
    </ul>
  );
};
