import AppAreaChart from "@/components/dashboard/AppAreaChart";
import AppBarChart from "@/components/dashboard/AppBarChart";
import AppLineChart from "@/components/dashboard/AppLineChart";
import AppPieChart from "@/components/dashboard/AppPieChart";

const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AppBarChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg">Testing</div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppPieChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppAreaChart/></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Testing</div>
      <div className="bg-primary-foreground p-4 rounded-lg"><AppLineChart/></div>

    </div>
  );
};

export default Homepage;
