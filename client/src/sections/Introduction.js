import Tags from "@/components/ui/tags";

const text = `Despite growing CSR funding and a motivated youth population, real-world volunteer impact remains fragmented, untracked, and undervalued.`;

export default function Introduction() {
    return (
        <section className="py-28 px-4 lg:py-40 flex items-center justify-center">
            <div className="container">
                <div className="flex justify-center">
                    <Tags title={"Introducing Layers"}/>
                </div>
                <div className="text-4xl md:text-5xl text-center font-medium mt-10">
                    <span>Social impact should be measurable and meaningful.</span>{" "}
                    <span className="text-white/15 leading-tight">{text}</span>
                    <span className="text-lime-400 block">That’s why we built Layers.</span>
                </div>
            </div>
        </section>
    );
}
