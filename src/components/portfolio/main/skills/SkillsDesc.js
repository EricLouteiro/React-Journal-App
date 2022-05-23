import { Button, Card, Spacer, Text } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

export const SkillsDesc = ({ isVisible, name, desc, setSkillDesc }) => {

    const [isOverCard, setIsOverCard] = useState(true);

    const allowClose = () => {
        if (!isOverCard) {
            setSkillDesc(false);
        }
    }
    
  return (
    <AnimatePresence exitBeforeEnter>
      {isVisible && (
        <motion.div
          className="skill-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={allowClose}
        >
          <motion.div
            initial={{ scale: 0, borderRadius: "50%" }}
            animate={{ scale: 1, borderRadius: "0%" }}
            transition={{ duration: 0.4 }}
            exit={{ scale: 0, borderRadius: "50%" }}
            onHoverStart={(e) => {setIsOverCard(true)}}
            onHoverEnd={(e) => { setIsOverCard(false)}}
            style={{
              justifyContent: "center",
              padding: 40,
              height: "65%",
              width: "90%",
              margin: 0,
              marginLeft: "5%",
            }}
          >
            <Card css={{ w: "100%", h: "100%" }}>
              <Card.Header
                css={{
                  justifyContent: "space-between",
                  pt: 8,
                  alignItems: "flex-start",
                }}
              >
                <Spacer x={1} />
                <Text h2 b>
                  {" "}
                  {name}{" "}
                </Text>

                <Button
                  rounded
                  auto
                  size="xs"
                  onClick={() => setSkillDesc(false)}
                  css={{ p: 0, m: 0, mt: 5, size: "fit-content" }}
                >
                  <i
                    className="fa-solid fa-xmark"
                    style={{
                      padding: "5px",
                      paddingRight: "7px",
                      paddingLeft: "7px",
                    }}
                  ></i>
                </Button>
              </Card.Header>
              <Spacer y={0.5} />
              <Card.Body css={{ pr: "10%", pl: "10%" }}>
                <Text color="#989898"> {desc}</Text>
              </Card.Body>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
