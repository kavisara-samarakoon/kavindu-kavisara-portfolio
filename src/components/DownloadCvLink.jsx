const filename = "Kavisara_Samarakoon_CV.pdf";

export default function DownloadCvLink({ className, onClick }) {
  return (
    <a
      href={`/resume/${filename}`}
      download={filename}
      onClick={onClick}
      className={`items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-4 font-dm text-sm font-semibold text-text-dark hover:bg-accent/90 active:bg-accent/80 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark motion-safe:transition-colors motion-safe:duration-200 ${className}`}
    >
      <svg
        aria-hidden="true"
        className="h-4 w-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4" />
      </svg>
      Download CV
    </a>
  );
}
