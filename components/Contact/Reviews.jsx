import ReviewsItem from "./ReviewsItem";
import React from "react";
export default function Reviews(props) {
  const placeid = process.env.NEXT_PUBLIC_placeid;
  const placesAPIkey = process.env.NEXT_PUBLIC_placesAPIkey;
  const url = `https://cors-anywhere-is.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${placesAPIkey}&language=en`;

  React.useEffect(() => {
    let isActive = true;
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        if (isActive) {
          const data = result.result;
          setReviews(data.reviews);
        }
      })
      .catch((error) => console.log(error.message));
    return () => {
      isActive = false;
    };
  }, []);

  const [reviews, setReviews] = React.useState([]);

  return (
    <div
      style={{ height: "calc(100% - 180px)" }}
      className={`fixed bottom-0 left-0 bg-white 2xl:w-1/4 lg:w-1/3 sm:w-1/2 w-3/4 p-5 z-20 shadow-inner border overflow-y-scroll`}
    >
      <div>
        {reviews.length < 1 ? (
          <div className={"loader"} />
        ) : (
          reviews
            .slice(0, 4)
            .map((item, index) => (
              <ReviewsItem item={item} index={index} key={index} />
            ))
        )}

        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Dreadlocks+City/@-33.9828177,18.4637197,17z/data=!4m8!3m7!1s0x1dcc430d84b5e967:0xc76ff258856fb68d!8m2!3d-33.9828177!4d18.4662946!9m1!1b1!16s%2Fg%2F11h3nnjh8l?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 text-sm"
          >
            More reviews
          </a>
        </div>
      </div>
    </div>
  );
}
