import {
  Card,
  Container,
  Text,
  Spacer,
} from "@nextui-org/react";
import { skillsData } from "../../../../data/data";
import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
    
    // console.log(skillsData)
    
  return (
    <Container className="main-container skills-container " id="skills">
      <Card css={{p: 30}}>
        <Text h2 css={{ml: 30, mt: 20}}>Skills</Text>
        <Spacer />
        <Card.Body className="skills-cards">
            {
                skillsData.map( skill => (
                    <SkillsCard 
                        key={ skill.name }
                        { ...skill }
                    />
                ))
            }
        </Card.Body>
      </Card>
    </Container>
  );
};
