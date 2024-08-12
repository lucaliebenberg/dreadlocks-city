import Service from "./ServiceMenuItem";
import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
import Hairdreams from "./Hairdreams";
export default function Services() {
  return (
    <div className="mx-auto">
      <SectionTitle title={"Our Services"} />
      <div className="grid lg:grid-rows-2 grid-rows-1 lg:grid-flow-col justify-center gap-6">
        <Link href="/haircare">

            {/* 1 */}
            {/* TODO: Styling Dreadlocks */}
            <Service service={"Styling Dreadlocks"} background={"/dreadlocks-assets/image-1.jpeg"} />

        </Link>
        <Link href="/skincare">

            {/* 2 */}
            {/* TODO: Treatment */}
            <Service service={"Treatment"} background={"/dreadlocks-assets/image-2.jpeg"} />

        </Link>
        <Link href="/nails">

            {/* 3 */}
            {/* TODO: Colouring */}
            <Service service={"Coloring"} background={"/dreadlocks-assets/image-3.jpeg"} />

        </Link>
        <Link href="/waxing">

            {/* 4 */}
            {/* TODO: Crochet */}
            <Service service={"Crochet"} background={"/dreadlocks-assets/image-6.jpeg"} />

        </Link>
      </div>
      <Hairdreams />
    </div>
  );
}
