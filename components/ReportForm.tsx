"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/base-ui/RadioGroup"
import { Label } from "@/components/ui/base-ui/Label"
import { Button } from "@/components/ui/Button"

const reportOptions = [
  { value: "scam", label: "The dApp is a scam" },
  { value: "incorrect-data", label: "dApp data is incorrect" },
  { value: "other", label: "Something else" },
]

type Props = {
  onSuccess?: () => void
}

const ReportForm = ({ onSuccess }: Props) => {
  const [reason, setReason] = useState<string | null>(null)
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      reason,
      message,
    }

    console.log(payload);

    // reset form
    setReason(null);
    setMessage("");

    onSuccess?.();
  }

  // validation logic
  const isValid =
    reason !== null &&
    (reason !== "other" || message.trim().length > 0)

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6 p-4 md:p-6">

      {/* Radio Options */}
      <RadioGroup
        value={reason ?? ""}
        onValueChange={(value) => setReason(value)}
        className="gap-0 w-full"
      >
        {reportOptions.map((option) => (
          <div
            key={option.value}
            className="flex items-center gap-2.5 py-2 md:py-3"
          >
            <RadioGroupItem
              value={option.value}
              id={`report-${option.value}`}
            />

            <Label
              htmlFor={`report-${option.value}`}
              className="cursor-pointer text-[15px] text-content-strong"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      {/* Description */}
      {
        reason === "other" && (
          <textarea
            placeholder="Please describe your issue (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-35 resize-none block w-full bg-surface-base-light rounded-xl text-content-strong placeholder:text-content-soft px-3.5 py-3 border border-border-medium focus:border-border-primary outline-none text-sm md:text-base leading-normal tracking-[-0.16px] disabled:cursor-not-allowed disabled:opacity-50 lcai-transition"
          />
        )
      }

      {/* Submit Button */}
      <Button
        type="submit"
        variant="gradient"
        size="md"
        disabled={!isValid}
      >
        SUBMIT
      </Button>
    </form>
  )
}

export default ReportForm
