export default function Phone() {
  return (
    <div
      className="flex justify-center py-2"
      style={{ backgroundColor: "#46A549", color: "#4D4949" }}
    >
      <picture>
        <source type="image/webp" srcSet="phone.webp" />
        <source type="image/png" srcSet="phone.png" />
        <img src="/phone.png" alt="Phone" className="w-6 h-6 mr-2" />
      </picture>
      <a href="tel:0837390394">
        <span className="font-bold">Call us</span> +27 83 739 0394
      </a>
    </div>
  );
}
