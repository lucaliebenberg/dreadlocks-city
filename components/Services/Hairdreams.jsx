import Image from "next/image";
import Button from "../Button";

export default function Hairdreams(props) {
  return (
    <div
      style={{ background: "#EDE6DD", maxWidth: "75.25rem" }}
      className="mx-auto mt-6 rounded shadow-lg grid xl:grid-cols-3 grid-cols-2"
    >
      <div className="flex rounded-l overflow-hidden h-full col-span-2">
        <Image
          width={600}
          height={800}
          loading={"eager"}
          priority={true}
          src={
            "/dreadlocks-assets/image-6.jpeg"
          }
          alt="Hairdreams"
        />
        <Image
          width={600}
          height={800}
          loading={"eager"}
          priority={true}
          src={
            "/dreadlocks-assets/image-8.jpeg"
          }
          alt="Hairdreams"
        />
      </div>

      <div className="flex-1 xl:px-6 px-10 py-10 xl:col-span-1 col-span-2">
  <h2 className="font-bold mb-4 text-xl">Dreadlocks City International</h2>
  <p className="mb-4">
    Welcome to Dreadlocks City, your go-to destination for expert dreadlock care and styling. We’re dedicated to celebrating the beauty of natural hair and offering top-tier services for all hair types. Our skilled team is here every day to help you maintain, style, and perfect your dreadlocks.
  </p>
  <h2 className="font-semibold mb-4">Operating Hours:</h2>
  <p className="mb-4">
    <strong>Monday to Saturday:</strong> 7:30 AM - 8:00 PM<br />
    <strong>Sunday:</strong> 8:00 AM - 6:00 PM
  </p>
  <h2 className="font-semibold mb-4">Our Services</h2>
  <ul className="list-disc pl-6 mb-4">
    <li className="mb-2">
      <strong>Crochet Retouch:</strong> Get a thorough double wash and a precise retouch for just R400 (African hair) or R500 (soft hair).
    </li>
    <li className="mb-2">
      <strong>Starting Dreadlocks:</strong> Begin your dreadlock journey with us for R700 (African hair) or R900 (soft hair).
    </li>
    <li className="mb-2">
      <strong>Extensions:</strong> We offer both human and high-quality artificial dreadlock extensions, with prices varying by length.
    </li>
    <li className="mb-2">
      <strong>Styling:</strong> Choose from our classic styles for R100 or opt for our top-notch styles at R150.
    </li>
    <li className="mb-2">
      <strong>Treatment:</strong> Pamper your scalp with a hot oil organic treatment, complete with a peppermint shampoo double wash and a black soap third wash, for an additional R100.
    </li>
    <li className="mb-2">
      <strong>Colouring:</strong> We offer black dye services for R150 using our own products, or R100 if you bring your own dye.
    </li>
    <li className="mb-2">
      <strong>Combining:</strong> Seamlessly combine your dreadlocks for R700 (African hair) or R900 (soft hair).
    </li>
    <li className="mb-2">
      <strong>Cutting:</strong> Transition from dreadlocks back to an afro for R750.
    </li>
  </ul>
  <p>
    At Dreadlocks City, we’re committed to delivering exceptional service in a welcoming environment. Whether you’re looking to start your dreadlock journey, maintain your current look, or try something new, we’re here to help you express your unique style with confidence.
  </p>
</div>

    </div>
  );
}
