import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Element-proof",
    description:
      "Rated IP67 (maximum depth of 1 meter up to 30 minutes).",
    link: "/",
  },
  {
    title: "Connectivity",
    description:
      "Bluetooth v 5.0  for proximity finding NFC tap for Lost Mode.",
    link: "/",
  },
  {
    title: "Battery Life",
    description:
      "User-replaceable CR2032 coin cell battery. Extra Battery included for convenience.",
    link: "/",
  },
  {
    title: "Sensor",
    description:
      "Accelerometer.",
    link: "/",
  },
  {
    title: "Compatibility",
    description:
      "Works with all your devices—details soon!",
    link: "/",
  },
  {
    title: "Environmental Requirements",
    description:
      "Operating −20° to 60°C (−4° to 140°F).",
    link: "/",
  },
];
