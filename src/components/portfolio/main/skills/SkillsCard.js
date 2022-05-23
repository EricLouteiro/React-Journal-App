import { Button, Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { SkillsDesc } from "./SkillsDesc";

export const SkillsCard = ({ name, img, description }) => {
  const [footer, setFooter] = useState(false);
  const [skillDescription, setskillDescription] = useState(false);
  // console.log(footer);
  const footerVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <>
      <motion.div
        onHoverStart={(e) => {
          setFooter(true);
        }}
        onHoverEnd={(e) => {
          setFooter(false);
        }}
        whileHover={{
          transition: {duration: .5, ease:'anticipate'},
          y: -10,
        }}
      >
        <Card
          clickable
          css={{ h: 170, w: 150 }}
          onClick={() => setskillDescription(true)}
        >
          <Card.Body css={{ p: 0, zIndex: 0 }}>
            <Card.Image
              objectFit="cover"
              src={img}
              width="100%"
              height="100%"
            />
          </Card.Body>
          <motion.div
            animate={footer ? "visible" : "hidden"}
            transition={{ duration: .4, type: "tween", ease: "anticipate" }}
            variants={footerVariant}
          >
            <Card.Footer
              className=""
              blur
              css={{
                position: "absolute",
                bgBlur: "#ffffff",
                //   borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
                h: 35,
                justifyContent: "center",
              }}
            >
              <Button
                rounded
                clickable='false'
                color="primary"
                size="xs"
                flat
                auto
                css={{ color: "#ff5959" }}
              >
                See more
              </Button>
            </Card.Footer>
          </motion.div>
        </Card>
      </motion.div>

      <SkillsDesc
        isVisible={skillDescription}
        desc={description}
        name={name}
        setSkillDesc={setskillDescription}
      />
    </>
  );
};
