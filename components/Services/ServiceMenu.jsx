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
            <Service service={"Hair care"} background={"haircare"} />

        </Link>
        <Link href="/skincare">

            {/* 2 */}
            <Service service={"Skin care"} background={"skincare"} />

        </Link>
        <Link href="/nails">

            {/* 3 */}
            <Service service={"Nails"} background={"nails"} />

        </Link>
        <Link href="/waxing">

            {/* 4 */}
            <Service service={"Waxing"} background={"waxing"} />

        </Link>
      </div>
      <Hairdreams />
    </div>
  );
}
