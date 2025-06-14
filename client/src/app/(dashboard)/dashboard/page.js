import Image from "next/image";
import homePageToast from "@/assets/images/homePageToast.png"
const Homepage = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src={homePageToast} width={600} height={600} className="rounded-md" alt="Click on the links on the sidebar to proceed!"/>
    </div>
  );
};

export default Homepage;
