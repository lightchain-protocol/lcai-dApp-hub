import { CreditCard } from "lucide-react"
import { Button } from "./Button"
import { cn } from "@/lib/utils"

const ConnectWalletButton = ({ className }: { className?: string }) => {
  return (
    <Button
      className={cn(className)}
      variant={'gradient'}
    >
      <CreditCard />
      Connect Wallet
    </Button>
  )
}

export default ConnectWalletButton