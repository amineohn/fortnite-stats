import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import Loading from "../components/Loading";
import fetcher from "../libs/fetcher";
import { Banners } from "../libs/types";
import FadeIn from "react-fade-in";
const Aes: NextPage = () => {
  const { data } = useSWR<Banners>(`/api/banners`, fetcher);
  return (
    <>
      <FadeIn className="flex flex-col justify-center px-8 my-20">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 dark:text-white">
          <h1 className="pb-2 text-5xl font-bold text-white">
            Banners Fortnite
          </h1>
          <div className="flex-col items-center">
            <div className="mb-8"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 w-full">
              {data ? (
                <>
                  {data?.banners.map((item) => {
                    return (
                      <>
                        {data ? (
                          <div className="w-full p-4 rounded-lg bg-white bg-opacity-20">
                            <div className="flex text-gray-200">
                              <div className="inline space-y-2">
                                <img
                                  src={item.images.icon}
                                  className="w-full rounded-lg z-50 bg-cover"
                                />
                                <div>
                                  <p>{item.name}</p>
                                </div>
                                <div>
                                  <p>{item.description}</p>
                                </div>
                                <div>
                                  <span>{item.category}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full p-4 h-44 rounded-lg bg-white bg-opacity-20 animate-pulse"></div>
                        )}
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <Loading />
                </>
              )}
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Aes;
