import { clsx, type ClassValue } from "clsx"
import slugify from "slugify"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateSlugWithId(name: string, id: string | number) {
  const base = slugify(name, { lower: true, strict: true, trim: true })
  return base ? `${base}-${id}` : String(id)
}
