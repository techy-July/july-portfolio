import Button from '@/components/ui/Button'
import { MAILTO_UGC } from '@/lib/constants'

export default function EnquiryCTAStrip() {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-6 border-t border-grey-200">
      <div className="flex flex-col gap-1">
        <p className="font-sans text-[9px] uppercase tracking-[0.12em] text-grey-400">
          INTERESTED IN A COLLAB?
        </p>
        <p className="font-sans text-[16px] leading-[1.3] text-grey-900">
          Let&apos;s make content that actually converts.
        </p>
      </div>
      <div className="flex-shrink-0">
        <Button variant="primary" href={MAILTO_UGC}>
          ENQUIRE
        </Button>
      </div>
    </div>
  )
}
