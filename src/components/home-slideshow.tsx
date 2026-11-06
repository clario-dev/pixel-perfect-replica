type Slide = { src: string; alt: string };

export function HomeSlideshow({ slides, step, className = "", eager = false }: {
  slides: Slide[];
  step: number;
  className?: string;
  eager?: boolean;
}) {
  const active = step % slides.length;
  return (
    <div className={`home-slideshow ${className}`} data-slide={active}>
      {slides.map((slide, index) => (
        <img key={`${slide.src}-${index}`} src={slide.src} alt={index === active ? slide.alt : ""}
          aria-hidden={index !== active} loading={eager ? "eager" : "lazy"}
          className={`home-slide ${index === active ? "home-slide-active" : ""}`} />
      ))}
    </div>
  );
}