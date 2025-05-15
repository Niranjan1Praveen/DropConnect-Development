import figmaIcon from "@/assets/images/figma-logo.svg"
import shadcnIcon from "@/assets/images/shadcn-logo.svg"
import framerIcon from "@/assets/images/framer-logo.svg"
import githubIcon from "@/assets/images/github-logo.svg"
import googleMapsIcon from "@/assets/images/googlemaps-logo.png"
import linkedinIcon from "@/assets/images/linkedin-logo.png"

const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "LinkedIn", icon: linkedinIcon, description: "LinkedIn adds volunteer badges and professional endorsements." },
    { name: "Google Maps", icon: googleMapsIcon, description: "Google Maps enables location-based event and volunteer matching." },
    { name: "Shadcn/ui", icon: shadcnIcon, description: "Shadcn/ui offers accessible, customizable UI components for React." },
    { name: "Framer", icon: framerIcon , description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];
export default integrations;