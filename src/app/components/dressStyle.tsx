import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import Image from "next/image"
  
  export function DressStyle() {
    return (
    <>
      <div className="p-5">
         <Accordion type="single" collapsible className="w-full">

         <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-xl" >Dress Style</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>




        <AccordionItem value="item-1">
          <AccordionTrigger>Casual</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      
        <AccordionItem value="item-3">
          <AccordionTrigger>Formal</AccordionTrigger>
          <AccordionContent>
            Yes. It is animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Party</AccordionTrigger>
          <AccordionContent>
            Yes. It is animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Gym</AccordionTrigger>
          <AccordionContent>
            Yes. It is animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    
      </div>

      <div className="flex justify-center items-start">
        <button className="w-[90%] bg-black text-white py-2 rounded-full">Apply Filter</button>
      </div>
    
    </>

     
    )
  }
  