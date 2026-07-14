

import Navbar from "@/src/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insightify",
  description: "Transform Voice, Images, and Videos into Text",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1372px] mx-auto ">
      <Navbar />
      <div className="md:py-5 md:px-0 px-3">{children}</div>
    </main>
  );
};

export default CommonLayout;
