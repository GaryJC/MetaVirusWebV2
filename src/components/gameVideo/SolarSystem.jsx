import { useParallax } from "react-scroll-parallax";
function SoloarSystem() {
  const parallax = useParallax({
    rotate: [0, 360],
  });
  return (
    <div className="solarSystem" ref={parallax.ref}>
      <svg
        width="825"
        height="825"
        viewBox="0 0 825 825"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="412.5"
          cy="412.5"
          r="108"
          transform="rotate(8 412.5 412.5)"
          stroke="#E9D9D9"
          strokeWidth="3"
        />
        <circle
          cx="412.5"
          cy="412.5"
          r="153"
          transform="rotate(8 412.5 412.5)"
          stroke="#E9D9D9"
          strokeWidth="3"
        />
        <circle
          cx="412.5"
          cy="412.5"
          r="205"
          transform="rotate(8 412.5 412.5)"
          stroke="#E9D9D9"
          strokeWidth="3"
        />
        <circle
          cx="412.5"
          cy="412.5"
          r="250"
          transform="rotate(8 412.5 412.5)"
          stroke="#E9D9D9"
          strokeWidth="3"
        />
        <circle
          cx="412.5"
          cy="412.5"
          r="289"
          transform="rotate(8 412.5 412.5)"
          stroke="#E9D9D9"
          strokeWidth="3"
        />
        <circle
          cx="412.5"
          cy="412.5"
          r="327"
          transform="rotate(8 412.5 412.5)"
          stroke="#E9D9D9"
          strokeWidth="3"
        />
        <circle
          cx="412.5"
          cy="412.5"
          r="363"
          transform="rotate(8 412.5 412.5)"
          stroke="#E9D9D9"
          strokeWidth="3"
        />
        <circle
          cx="412.5"
          cy="412.5"
          r="205"
          transform="rotate(8 412.5 412.5)"
          stroke="#E9D9D9"
          strokeWidth="3"
        />
        <circle
          cx="653.5"
          cy="254.5"
          r="19.5"
          transform="rotate(8 653.5 254.5)"
          fill="#75A0BE"
        />
        <circle
          cx="332.5"
          cy="728.5"
          r="19.5"
          transform="rotate(8 332.5 728.5)"
          fill="#8A78BC"
        />
        <circle
          cx="776.5"
          cy="406.5"
          r="19.5"
          transform="rotate(8 776.5 406.5)"
          fill="#EAEEDB"
        />
        <circle
          cx="273.5"
          cy="345.5"
          r="20.5"
          transform="rotate(8 273.5 345.5)"
          fill="#E15757"
        />
        <circle
          cx="600"
          cy="494"
          r="20"
          transform="rotate(8 600 494)"
          fill="#6DDFF9"
        />
        <circle
          cx="447.5"
          cy="311.5"
          r="19.5"
          transform="rotate(8 447.5 311.5)"
          fill="#FFE792"
        />
        <circle
          cx="412.5"
          cy="412.5"
          r="63.5"
          transform="rotate(8 412.5 412.5)"
          fill="#FF7448"
        />
        <circle
          cx="167.5"
          cy="462.5"
          r="22.5"
          transform="rotate(8 167.5 462.5)"
          fill="#DDA788"
        />
        <circle
          cx="167.5"
          cy="462.5"
          r="30.5"
          transform="rotate(8 167.5 462.5)"
          stroke="#DDA788"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default SoloarSystem;
