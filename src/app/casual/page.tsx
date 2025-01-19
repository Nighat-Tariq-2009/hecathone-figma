import { AccordionDemo } from "../components/Accordion";
import { CheckboxDemo } from "../components/checkbox";
import { DressStyle } from "../components/dressStyle";
import Shirts from "../components/shirts";
import Size from "../components/size";
import { SliderDemo } from "../components/slider";

function Casual() {
  return (
    <main className="flex justify-center items-center flex-col md:flex-row space-x-4 ">
      {/* left */}
      <div className="w-full h-full lg:w-[295px] lg:h-[1200px] mt-16 ">
        <AccordionDemo />
        <SliderDemo />
        <CheckboxDemo />
        <Size />
        <DressStyle />
      </div>

      {/* right */}
      <div className="w-full lg:w-[900px] h-full sm:h-[1200px] ">
        <Shirts />
      </div>
    </main>
  );
}

export default Casual;
