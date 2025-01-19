import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="px-5">
        <h2 className="font-bold mb-4">Price</h2>
           <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[90%]", className)}
      {...props}
    />
    <div className="flex justify-between items-center mt-1">
        <h2 className="font-bold">$50</h2>
        <h2 className="font-bold">$100</h2>
    </div>
    </div>
 
  )
}
