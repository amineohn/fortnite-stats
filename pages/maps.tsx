import type { NextPage } from "next";
import React, { ImgHTMLAttributes } from "react";
import useSWR from "swr";
import Loading from "../components/Loading";
import fetcher from "../libs/fetcher";
import { Maps } from "../libs/types";
import FadeIn from "react-fade-in";
const Map: NextPage = () => {
  const { data } = useSWR<Maps>(`/api/maps`, fetcher);
  return (
    <>
      <FadeIn className="flex flex-col justify-center px-8 my-0 md:my-36">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 dark:text-white">
          <h1 className="text-5xl font-bold text-white mb-2">Maps Fortnite</h1>
          <div className="flex-col justify-center items-center space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 w-max mx-5 my-2 space-y-3 md:space-x-3 mb-2">
              <div className="flex items-center justify-center">
                {data ? (
                  <img
                    src={data?.images.blank}
                    className="h-96 w-96 rounded-lg"
                  />
                ) : (
                  <div className="h-96 w-96 rounded-lg bg-white bg-opacity-20 animate-pulse" />
                )}
              </div>
              <div className="w-full metric-card max-w-7xl bg-white bg-opacity-20 rounded-2xl p-4 h-80 overflow-auto pr-6">
                <p
                  className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white"
                  data-interception="off"
                >
                  {data ? (
                    <>
                      <div className="flex flex-col text-white">
                        {data?.pois.map((item) => {
                          return (
                            <>
                              <div className="grid space-y-2">
                                <div>
                                  <span className="text-lg">id:</span>
                                  <p className="text-xl">{item.id}</p>
                                </div>
                                <div>
                                  <span className="text-lg">location:</span>
                                  <p className="text-xl">
                                    {item.location.x} {item.location.y}
                                    {item.location.z}
                                  </p>
                                </div>
                                <div>
                                  <span className="text-lg">name:</span>
                                  <p className="text-xl">{item.name}</p>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <>
                      <Loading />
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Map;
