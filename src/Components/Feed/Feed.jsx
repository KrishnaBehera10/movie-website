import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Feed({ title, category }) {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjllNTRiMDNmMjg1OWNhMTVhNmJhNGY5M2JjYmEyMCIsIm5iZiI6MTczNTYzODEzMS4xNzcsInN1YiI6IjY3NzNiYzczNDNhMjE5ODJkYTEyZDFkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2-Ki_lm8StfjtzcjrIBtvJmpy_N78lpEjDRSpDJ4wIM",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setdata(res.results))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="px-2 pt-4">
      <div className="sm:max-w-2xl md:max-w-7xl mx-auto">
        <p className="text-gray-300 text-md font-semibold flex items-center justify-between">
          {title ? title : "Recently Updated"}
          <span className="text-xs font-medium text-blue-400">see all</span>
        </p>
        <div className="flex gap-5 max-w-fit overflow-scroll scrollbar-hide my-3">
          {data?.map((x) => {
            return (
              <Link to={`/video/${x.id}`} key={x.id} className="">
                <img
                  src={`https://image.tmdb.org/t/p/original/${x.poster_path}`}
                  alt=""
                  className="max-h-44 max-w-44 my-2 rounded-2xl"
                />
                <p className="text-xs sm:text-sm text-gray-400 py-2">
                  {x.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Feed;
