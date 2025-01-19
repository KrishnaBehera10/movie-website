import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import Feed from "../Feed/Feed";
import { MdStar } from "react-icons/md";
function Video() {
  const [data, setdata] = useState(null);
  const [movieinfo, setmovieinfo] = useState(null);
  const Navigate = useNavigate();
  const { id } = useParams();
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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setdata(res.results[1]))
      .catch((err) => console.error(err));

    //Movie Details

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => setmovieinfo(res))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <div className="pt-16 px-2 h-screen">
      <div
        onClick={() => Navigate("/")}
        className="fixed top-10 md:left-10 border border-gray-400 cursor-pointer text-white p-2 rounded-3xl bg-total"
      >
        <BiArrowBack size={40} />
      </div>
      <iframe
        width="100%"
        height="70%"
        src={`https://www.youtube.com/embed/${data?.key}`}
        className="mx-auto w-full sm:max-w-2xl md:max-w-7xl"
      ></iframe>
      <div id="info" className="sm:max-w-2xl md:max-w-7xl mx-auto my-10">
        <div className="flex justify-between gap-10 ">
          <img
            src={`https://image.tmdb.org/t/p/original/${movieinfo?.poster_path}`}
            alt=""
            className="w-64 hidden md:block "
          />

          <div id="movie-info" className="text-gray-400 mt-5 sm:mt-0">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-semibold">{movieinfo?.title}</p>
              <div className="flex items-center gap-1 bg-red-700 p-3 rounded-xl cursor-pointer">
                <GoPlus />
                <p className="font-medium text-xs">Add to Favourite</p>
              </div>
            </div>
            <div className="my-3 flex items-center gap-3 flex-wrap">
              {movieinfo?.genres.map((x, index) => {
                return (
                  <div key={index}>
                    <p className="p-3 bg-total rounded-lg">{x.name}</p>
                  </div>
                );
              })}
              <p className="font-medium">
                {new Date(movieinfo?.release_date).getFullYear()}
              </p>
              <p className="flex items-center gap-1 font-medium">
                <MdStar size={20} />
                <span>{movieinfo?.vote_average}</span>
              </p>
            </div>
            <div className="font-medium mb-3">
              <p>{movieinfo?.overview}</p>
            </div>
            <div className="font-medium">
              <p>
                Country : <span>{movieinfo?.origin_country}</span>
              </p>
              <p className="flex items-center">
                Genre :
                <span className="flex gap-3">
                  {movieinfo?.genres.map((x, index) => (
                    <div key={index}>{x.name}</div>
                  ))}
                </span>
              </p>
              <p>
                Date Relase : <span>{movieinfo?.release_date}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Feed title={"Popular"} category={"popular"} />
    </div>
  );
}

export default Video;
