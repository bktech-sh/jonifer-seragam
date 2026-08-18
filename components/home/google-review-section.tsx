import { googleMapsUrl, googleReviews } from "@/data/home-content";

const rowSplit = Math.ceil(googleReviews.length / 2);
const row1 = googleReviews.slice(0, rowSplit);
const row2 = googleReviews.slice(rowSplit);

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-[#F5B301]" aria-label={`${rating} dari 5 bintang`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          fill={index < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewRow({
  items,
  reverse = false,
}: {
  items: typeof googleReviews;
  reverse?: boolean;
}) {
  const track = [...items, ...items];

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={`flex w-max gap-4 sm:gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {track.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            className="flex w-72 shrink-0 flex-col gap-3 rounded-2xl border border-black/5 bg-white p-5 sm:w-80 sm:p-6"
          >
            <div className="flex items-center justify-between gap-2">
              <StarRow rating={review.rating} />
              <span className="text-xs text-[#1c1c1c]/50">{review.date}</span>
            </div>
            <p className="text-sm leading-relaxed text-[#1c1c1c]/80">
              &ldquo;{review.quote}&rdquo;
            </p>
            <p className="mt-auto text-sm font-semibold text-[#1c1c1c]">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GoogleReviewSection() {
  if (googleReviews.length === 0) return null;

  return (
    <section className="overflow-hidden bg-[#EEF5F5] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#3b8384] uppercase">
              Google Review
            </p>
            <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-[#1c1c1c] sm:text-3xl">
              Kata Pelanggan di Google Maps
            </h2>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#3b8384] hover:text-[#1c1c1c]"
          >
            Lihat Semua Review di Google Maps →
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 sm:gap-6">
        <ReviewRow items={row1} />
        {row2.length > 0 && <ReviewRow items={row2} reverse />}
      </div>
    </section>
  );
}
