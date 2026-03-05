"use client"

import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/base-ui/Dialog'
import { Flag, X } from 'lucide-react'
import ReportForm from '@/components/ReportForm'
import { useState } from 'react'

const ReportDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <span
          className="group/button inline-flex shrink-0 cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-[10px] outline-none transition-all disabled:pointer-events-none disabled:opacity-50 bg-surface-base-light hover:bg-surface-base-soft border-2 border-border-light text-content-ultra hover:opacity-90 hover:text-content-bold active:text-white type-body-s h-9 md:h-11 gap-1.5 px-4 md:font-medium lcai-transition w-full"
        >
          <Flag />
          REPORT
        </span>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className={"p-0 gap-0 bg-[#22232A] rounded-2xl sm:max-w-[400px]"}
      >
        <DialogHeader className="px-4 pt-4 pb-3 flex flex-row gap-4 items-center justify-between border-b border-border-soft">
          <div className="flex gap-2 text-xl font-medium leading-[1.2] tracking-[-0.2px] text-content-strong">
            <span className="flex items-center justify-center w-6 h-6">
              <Flag />
            </span>
            Report
          </div>
          <DialogClose className={"cursor-pointer text-content-default hover:text-content-brand-light lcai-transition flex items-center justify-center h-8 w-8 bg-surface-base-extra-light rounded-xl"}>
            <X className="size-4" />
          </DialogClose>
        </DialogHeader>
        <ReportForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}

export default ReportDialog