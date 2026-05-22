import ExternalLink from '@/components/ui/ExternalLink'
import Pill from '@/components/ui/Pill'
import YoutubeEmbed from './YoutubeEmbed'
import type { VideoCardData } from '@/types'

export default function VideoCard({
  videoId,
  contentType,
  brandName,
  productDescription,
  linkLabel,
  linkUrl,
}: VideoCardData) {
  return (
    <div className="relative flex w-[230px] flex-shrink-0 flex-col overflow-hidden rounded-[8px] bg-video-mauve">
      {/* Content type badge */}
      <div className="absolute left-2 top-2 z-10">
        <Pill variant="content-type">{contentType}</Pill>
      </div>

      {/* Video embed / placeholder */}
      <div className="relative h-[160px] w-full">
        <YoutubeEmbed videoId={videoId} title={`${brandName} — ${contentType}`} />
      </div>

      {/* Avatar */}
      <div
        className="absolute bottom-[52px] left-2 flex h-7 w-7 items-center justify-center rounded-full bg-lavender-soft"
        aria-hidden="true"
      >
        <span className="font-serif text-[14px] text-lavender-mid">J</span>
      </div>

      {/* Footer band */}
      <div className="bg-teal-xdark px-[10px] py-2">
        <p className="font-sans text-[11px] text-on-dark">{brandName}</p>
        <p className="font-sans text-[10px] text-on-dark-sub">{productDescription}</p>
        <ExternalLink
          href={linkUrl}
          className="font-sans text-[10px] text-on-dark-muted underline hover:text-on-dark-sub"
          srLabel={`${linkLabel} (opens in new tab)`}
        >
          {linkLabel}
        </ExternalLink>
      </div>
    </div>
  )
}
