import Service from "./ServiceMenuItem";
import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
import Hairdreams from "./Hairdreams";
export default function Services() {
  return (
    <div className="mx-auto">
      <SectionTitle title={"Our Services"} />
      <div className="grid lg:grid-rows-2 grid-rows-1 lg:grid-flow-col justify-center gap-6">
        <Link href="/haircare" legacyBehavior>

            <Service service={"Hair care"} background={"haircare"} />

        </Link>
        <Link href="/skincare" legacyBehavior>

            <Service service={"Skin care"} background={"skincare"} />

        </Link>
        <Link href="/nails" legacyBehavior>

            <Service service={"Nails"} background={"nails"} />

        </Link>
        <Link href="/waxing" legacyBehavior>

            <Service service={"Waxing"} background={"waxing"} />

        </Link>
      </div>
      <Hairdreams />
    </div>
  );
}
