import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  height,
  width,
  ...props
}) {
  const dynamicStyles =
    orientation === "horizontal"
      ? { height: height ?? "1px", width: width ?? "100%" }
      : { height: height ?? "100%", width: width ?? "1px" }

  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn("bg-border shrink-0", className)}
      style={dynamicStyles}
      {...props}
    />
  )
}

export { Separator }
