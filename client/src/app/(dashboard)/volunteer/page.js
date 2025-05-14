import AppBarChart from "@/components/dashboard/AppBarChart";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Testing</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Testing</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Testing</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Testing</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Testing</div>
    </div>
  );
};

export default Homepage;
