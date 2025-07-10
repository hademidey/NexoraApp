export default function Logo({ colour, size, bold, className }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="size-7">
        <img
          src="/img/Vector.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <h1 className={`${colour} ${size} ${bold}`}>Nexora Solution Inc.</h1>
    </div>
  );
}
