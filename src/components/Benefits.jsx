import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import DynamicCardsVariant2 from "./ui/LiveCards";
import { MeteorsDemo } from "./ui/meteorcard1";
import { MeteorsDemo2 } from "./ui/meteorcard2";
import { MeteorsDemo3 } from "./ui/meteorcard3";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl lg:mb-10"
          title={
            <>
              Bringing <span className="text-color-2">Intelligence</span> and <span className="text-color-1">Emotion</span> to <span className="text-color-3">Life</span>
            </>
          }
        />

        <div className="flex flex-wrap justify-center gap-10 mb-10">
          
          <MeteorsDemo/>
          <MeteorsDemo2/>
          <MeteorsDemo3/>
          
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
