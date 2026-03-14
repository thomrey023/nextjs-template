import Homepage from "@/components/home-page/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | ProjectName", // TODO: Change this to actual project name
  description: "ProjectName", // TODO: Change this to actual project name
};

const Page = () => {
  return <Homepage />;
};

export default Page;
