import Tags from "@/components/ui/tags";
import IntegrationColumn from "@/components/ui/integrationColumn";
import integrations from "@/assets/data/integrations";

export default function Integrations() {
  return (
    <section className="px-4 py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tags title={"Integrations"} />
            <h2 className="text-5xl font-medium mt-6">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects with your favorite tools, making it
              easy to plug into any workflow and collaborate across platforms.
            </p>
          </div>

          <div>
            <div className="h-[400px] lg:h-[800px] overflow-hidden mt-10 lg:mt-0 grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationColumn integrations={integrations} />
              <IntegrationColumn
                integrations={integrations.slice().reverse()}
                reverse
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
