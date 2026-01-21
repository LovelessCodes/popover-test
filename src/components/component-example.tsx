import {
  Example,
  ExampleWrapper,
} from "@/components/example"
import { Popover, PopoverCreateHandle, PopoverPopup, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button";

export function ComponentExample() {
  return (
    <ExampleWrapper>
      <PopoverExample />
    </ExampleWrapper>
  )
}

const popoverHandle = PopoverCreateHandle<React.ComponentType>();

function PopoverExample() {
  return (
    <Example title="Popover (Detached triggers)" className="items-center">
      <div className="flex space-x-4">
        <PopoverTrigger render={<Button />} handle={popoverHandle} payload={() => <div className="p-4">Hello from Popover A</div>}>
          Trigger A
        </PopoverTrigger>
        <PopoverTrigger render={<Button />} handle={popoverHandle} payload={() => <div className="p-4">Hello from Popover B</div>}>
          Trigger B
        </PopoverTrigger>
      </div>
      <Popover handle={popoverHandle}>
        {({ payload: Payload }) => (
          <PopoverPopup>
            {Payload !== undefined && <Payload />}
          </PopoverPopup>
        )}
      </Popover>
    </Example>
  )
}
