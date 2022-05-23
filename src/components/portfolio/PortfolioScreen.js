import { Card, Grid } from "@nextui-org/react";
import { About } from "./main/About";
import { MainCard } from "./main/MainCard";
import { Sidebar } from "./sidebar/Sidebar";
import { Skills } from "./main/skills/Skills";
import { Contact } from "./main/contact/Contact";

export const PortfolioScreen = () => {
  return (
    <>
      <Grid.Container className="main-grid">
        <Sidebar />
        <MainCard />
        <About />
        <Skills />
        <Contact />
        <Card className="about2"> hola3 </Card>
      </Grid.Container>
    </>
  );
};
