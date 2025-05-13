import Tags from "@/components/ui/tags";
import IntegrationColumn from "@/components/ui/integrationColumn";
import integrations from "@/assets/data/integrations";

export default function Integrations() {
    return (
        <section className="px-4 py-24 overflow-hidden text-white">
            <div className="max-w-3xl mx-auto">
                <div className="flex">
                    <Tags title={"Integrations"} />
                </div>
                <h2 className="text-5xl font-bold mt-4 leading-tight">
                    Plays well with <span className="text-lime-400">others</span>
                </h2>
                <p className="text-white/60 mt-4 text-lg leading-relaxed">
                    Layers seamlessly connects with your favorite tools, making it easy to plug into any workflow and collaborate across platforms.
                </p>

                <div className="h-[400px] overflow-hidden mt-10 grid md:grid-cols-2 gap-4 [--mask:linear-gradient(to-bottom,transparent_0%,black_15%,black_85%,transparent_100%)] [mask-image:var(--mask)] [webkit-mask-image:var(--mask)]">
                    <IntegrationColumn integrations={integrations}/>
                    <IntegrationColumn integrations={integrations.slice().reverse()} className="hidden md:flex"/>
                </div>
            </div>
        </section>
    );
}
