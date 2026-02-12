export default function MarqueeBanner() {
  const text =
    " /// OPEN FOR WORK /// FULL STACK DEVELOPMENT /// UI/UX DESIGN /// SCALABLE BACKENDS /// ACCESSIBLE /// FAST /// SECURE /// ";

  return (
    <div className="border-b-4 border-black bg-neo-blue py-3 relative z-20 mt-5">
      <div className="marquee-container font-[family-name:var(--font-mono)] font-bold text-2xl text-white">
        <div className="marquee-content">
          <span className="whitespace-nowrap">{text}</span>
          <span className="whitespace-nowrap">{text}</span>
        </div>
      </div>
    </div>
  );
}
