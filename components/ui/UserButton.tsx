import { User2Icon } from "lucide-react"
import { Button } from "./Button"
import { cn } from "@/lib/utils"

const UserButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn(className)}
      variant={'outline'}
    >
      <User2Icon />
    </Button>
  )
}

export default UserButton