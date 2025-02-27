import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import Image from "next/image"
  
  export function AccordionDemo() {
    return (
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Filter</h1>
          <Image src="/images/lines.png" alt="icon" width={100} height={100} className="w-8 h-" />
        </div>
         <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>T-Shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shorts</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It is animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Hoodie</AccordionTrigger>
          <AccordionContent>
            Yes. It is animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Jeans</AccordionTrigger>
          <AccordionContent>
            Yes. It is animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>

     
    )
  }
  