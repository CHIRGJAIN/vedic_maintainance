import { Mail, MapPin } from "lucide-react";
import RotatingMandala from "@/components/RotatingMandala";
import mandalaPattern from "@/assets/mandala-pattern.jpg";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Ambient gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background:
            "linear-gradient(135deg, hsl(222 47% 6%) 0%, hsl(230 40% 10%) 30%, hsl(222 47% 6%) 60%, hsl(240 30% 8%) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Subtle mandala background overlay */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `url(${mandalaPattern})` }}
      />

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-2xl mx-auto w-full gap-10">
        {/* Logo placeholder */}
        <div className="opacity-0 animate-fade-up">
          <div className="w-16 h-16 rounded-full border-2 border-saffron/40 flex items-center justify-center">
            <img src="../public/favicon.ico" alt="Logo" className="w-full h-full object-cover border-radius:10 bg-white" />
          </div>
        </div>

        {/* Hero heading */}
        <div className="space-y-4 opacity-0 animate-fade-up-delay-1">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
            style={{ textShadow: "0 0 40px hsl(24 100% 60% / 0.25)" }}
          >
            We'll Be Back Soon
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-sans">
            Preserving Ancient Wisdom. Enhancing the Experience.
          </p>
        </div>

        {/* Sanskrit quote */}
        <div className="opacity-0 animate-fade-up-delay-2 space-y-2">
          <p className="font-serif text-xl md:text-2xl text-gold italic">
            तमसो मा ज्योतिर्गमय
          </p>
          <p className="text-sm text-muted-foreground font-sans">
            "Lead me from darkness to light" — Bṛhadāraṇyaka Upaniṣad
          </p>
        </div>

        {/* Rotating Mandala */}
        <div className="opacity-0 animate-fade-up-delay-2">
          <RotatingMandala />
        </div>

        {/* Message */}
        <div className="opacity-0 animate-fade-up-delay-3 max-w-lg">
          <p className="text-foreground/80 font-sans leading-relaxed">
            We are currently upgrading our platform to deliver a richer experience
            blending Vedic knowledge with modern innovation.
          </p>
        </div>

        {/* Status */}
        <div className="opacity-0 animate-fade-up-delay-3 w-full max-w-xs space-y-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground font-sans">
            <span>Progress</span>
            <span className="text-saffron">Launching Soon</span>
          </div>
          <div className="h-1 w-full rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full animate-gradient-shift"
              style={{
                width: "65%",
                background: "linear-gradient(90deg, hsl(24 100% 60%), hsl(43 96% 56%), hsl(24 100% 60%))",
                backgroundSize: "200% 100%",
              }}
            />
          </div>
        </div>

        {/* Contact */}
        <div className="opacity-0 animate-fade-up-delay-4 flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground font-sans">
          <a
            href="mailto:vveseducation@gmail.com"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-saffron"
          >
            <Mail className="w-4 h-4" />
            vveseducation@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Kurukshetra, Haryana
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 text-center border-t border-border/30">
        <p className="font-serif text-sm text-muted-foreground">
          Vedic Vigyanam Explorer Society
        </p>
        <p className="text-xs text-muted-foreground/60 mt-1 font-sans">
          Where Ancient Wisdom Meets Modern Science
        </p>
      </footer>
    </div>
  );
};

export default Index;
