interface YoutubeEmbedProps {
  videoId: string
  title: string
  className?: string
}

export default function YoutubeEmbed({ videoId, title, className = '' }: YoutubeEmbedProps) {
  const isPlaceholder = videoId.startsWith('TODO_')

  if (isPlaceholder) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-video-mauve ${className}`}
        aria-label={title}
      >
        <span className="font-sans text-[12px] text-on-dark-sub">Video embed</span>
      </div>
    )
  }

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title={title}
      sandbox="allow-scripts allow-same-origin allow-presentation"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={`h-full w-full ${className}`}
    />
  )
}
