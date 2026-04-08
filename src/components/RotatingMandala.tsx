import mandalaPattern from "@/assets/mandala-pattern.jpg";

const RotatingMandala = () => {
  return (
    <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full animate-glow-pulse" 
        style={{ boxShadow: "var(--glow-saffron), var(--glow-gold)" }} 
      />
      {/* Rotating mandala */}
      <img
        src={mandalaPattern}
        alt="Vedic mandala"
        width={224}
        height={224}
        className="w-full h-full rounded-full animate-spin-slow opacity-70 object-cover"
      />
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-saffron animate-glow-pulse" />
      </div>
    </div>
  );
};

export default RotatingMandala;
