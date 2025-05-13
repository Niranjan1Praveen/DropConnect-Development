import FeatureCard from "@/components/ui/featureCard";
import Tags from "@/components/ui/tags";
import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg';
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg';
import avatar3 from '@/assets/images/avatar-owen-garcia.jpg';
import Image from "next/image";
import Avatar from "@/components/ui/avatar";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-24 px-4 flex items-center justify-center">
      <div className="container">
        <div className="flex justify-center">
          <Tags title={"Features"} />
        </div>
        <h2 className="text-6xl font-medium text-center mt-6">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8">
          {/* Card-1 */}
          <FeatureCard title={"Real-time Collaboration"} description={"Work together seamlessly with conflict-free team editing"}>
            <div className="aspect-video flex items-center justify-center">
              <Avatar className={"z-40"}>
                <Image src={avatar1} alt="Avatar 1" className="rounded-full"/>
              </Avatar>
              <Avatar className={"-ml-6 border-indigo-500 z-30"}>
                <Image src={avatar2} alt="Avatar 2" className="rounded-full"/>
              </Avatar>
              <Avatar className={"-ml-6 border-amber-500 z-20"}>
                <Image src={avatar3} alt="Avatar 3" className="rounded-full"/>
              </Avatar>
              <Avatar className={"-ml-6 border-transparent rounded-full"}>
                <div className="size-full rounded-full bg-neutral-700 inline-flex items-center justify-center gap-1">
                  {Array.from({length: 3}).map((_, i) => (
                    <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
        
          {/* Card-2 */}
          <FeatureCard title={"Interactive Prototyping"} description={"Engage your clients with prototypes that react to user actions"}/>

          {/* Card-3 */}
          <FeatureCard title={"Keyboard Quick Actions"} description={"Powerful commands to help you create designs more quickly"}/>

        </div>
        {/* Other Features */}
        <div>
          {features.map((feature) => (
            <div>
              <span></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
