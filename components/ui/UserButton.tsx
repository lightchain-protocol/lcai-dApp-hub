import { User2Icon } from "lucide-react"
import { Button } from "./Button"
import { cn } from "@/lib/utils"

const UserButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn(
        "size-10 border-0 bg-surface-base-white p-0 text-content-deep hover:bg-surface-base-white/90 dark:bg-surface-base-subtle dark:text-content-strong",
        className
      )}
      variant={'outline'}
    >
      <User2Icon />
    </Button>
  )
}

export default UserButton
