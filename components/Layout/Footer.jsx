export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto text-center">
        <p className="pt-8 lg:pt-16 sm:w-3/4 w-screen mx-auto text-center">
          © 2015-{year} Dreadlocks City International. All rights reserved.
          <br />
          13 Old Stanhope Road Claremont, Cape Town, South Africa
        </p>
      </div>
      <style jsx>{`
        footer {
          height: 9.625rem;
          background: rgba(96, 90, 90, 0.89);
          color: white;
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
    </footer>
  );
}
