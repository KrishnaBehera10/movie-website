import NavBar from "../../Components/NavBar/NavBar";
import React, { useEffect, useState } from "react";
import { Suspense } from "react";
const Feed = React.lazy(() => import("../../Components/Feed/Feed"));
function Home() {
  const [data, setdata] = useState(null);
  // console.log(data);
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
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => setdata(res.results[10]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <NavBar />
      <img
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
        alt=""
        className="hidden sm:block object-cover object-center w-full h-[830px] mx-auto relative bg-gradient-to-b from-gray-500 via-slate-400 border-0"
      />
      <div className="absolute top-[49%] left-[8%] hidden sm:block">
        <p className="text-5xl font-extrabold text-red-600">
          {data?.title.toUpperCase()}
        </p>
        <p className="text-gray-400 max-w-2xl my-3 liter tracking-wide">
          {data?.overview}
        </p>
      </div>
      <div className="max-w-full h-full bg-hero pb-4 mt-24 sm:mt-20">
        <Suspense>
          <Feed />
          <Feed title={"Popular"} category={"popular"} />
          <Feed title={"Top Rated"} category={"top_rated"} />
          <Feed title={"Upcoming"} category={"upcoming"} />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
