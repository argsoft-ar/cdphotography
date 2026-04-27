import "./Home.css";
import { Hero } from "./sections/Hero/Hero";
import { OurWork } from "./sections/OurWork/OurWork";
import { Services } from "./sections/Services/Services";
import { AboutUs } from "./sections/AboutUs/AboutUs";
import { ConnectWithMe } from "./sections/ConnectWithMe/ConnectWithMe";

export const Home = () => {
  return (
    <main className="home">
      <Hero />
      <OurWork />
      <Services />
      <AboutUs />
      <ConnectWithMe />
    </main>
  );
};
