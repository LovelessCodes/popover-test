import { Popover as PopoverPrimitive } from '@base-ui/react/popover';
import { cn } from '@/lib/utils';
import { Arrow } from '@/components/ui/arrow';

const PopoverCreateHandle = PopoverPrimitive.createHandle;

const Popover = PopoverPrimitive.Root;

function PopoverArrow(props: PopoverPrimitive.Arrow.Props) {
  return (
    <PopoverPrimitive.Arrow
      className="flex transition-[left] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=top]:bottom-[-8px] data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180"
      data-slot="popover-arrow"
      {...props}
    >
      <Arrow />
    </PopoverPrimitive.Arrow>
  );
}

function PopoverTrigger(props: PopoverPrimitive.Trigger.Props) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverPopup({
  children,
  className,
  viewportClassName,
  side = 'bottom',
  align = 'center',
  sideOffset = 4,
  alignOffset = 0,
  tooltipStyle = false,
  showArrow = true,
  ...props
}: PopoverPrimitive.Popup.Props & {
  viewportClassName?: PopoverPrimitive.Viewport.Props['className'];
  side?: PopoverPrimitive.Positioner.Props['side'];
  align?: PopoverPrimitive.Positioner.Props['align'];
  sideOffset?: PopoverPrimitive.Positioner.Props['sideOffset'];
  alignOffset?: PopoverPrimitive.Positioner.Props['alignOffset'];
  tooltipStyle?: boolean;
  showArrow?: boolean;
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        className="z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] data-instant:transition-none"
        data-slot="popover-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <PopoverPrimitive.Popup
          className={cn(
            'relative flex h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) rounded-lg bg-popover bg-clip-padding text-popover-foreground shadow-lg outline-1 outline-border transition-[width,height,scale,opacity] duration-[50ms] before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] data-ending-style:scale-75 data-starting-style:scale-75 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:ease-in data-starting-style:ease-out dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]',
            tooltipStyle &&
              'w-fit text-balance rounded-md text-xs shadow-black/5 shadow-md before:rounded-[calc(var(--radius-md)-1px)]',
            className
          )}
          data-slot="popover-popup"
          {...props}
        >
          {showArrow && <PopoverArrow />}
          <PopoverPrimitive.Viewport
            className={cn(
              'relative size-full max-h-(--available-height) overflow-clip px-(--viewport-inline-padding) py-4 outline-none [--viewport-inline-padding:--spacing(4)] data-instant:transition-none **:data-current:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-ending-style:opacity-0 **:data-previous:data-starting-style:opacity-0 **:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding)-2px)] **:data-current:opacity-100 **:data-previous:opacity-100 **:data-current:transition-opacity **:data-previous:transition-opacity',
              tooltipStyle
                ? 'py-1 [--viewport-inline-padding:--spacing(2)]'
                : 'not-data-transitioning:overflow-y-auto',
              viewportClassName
            )}
            data-slot="popover-viewport"
          >
            {children}
          </PopoverPrimitive.Viewport>
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

function PopoverClose({ ...props }: PopoverPrimitive.Close.Props) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}

function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
  return (
    <PopoverPrimitive.Title
      className={cn('font-semibold text-lg leading-none', className)}
      data-slot="popover-title"
      {...props}
    />
  );
}

function PopoverDescription({
  className,
  ...props
}: PopoverPrimitive.Description.Props) {
  return (
    <PopoverPrimitive.Description
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="popover-description"
      {...props}
    />
  );
}

export {
  PopoverCreateHandle,
  Popover,
  PopoverArrow,
  PopoverTrigger,
  PopoverPopup,
  PopoverPopup as PopoverContent,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
};
