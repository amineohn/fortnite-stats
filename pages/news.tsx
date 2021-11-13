import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import Loading from "../components/Loading";
import fetcher from "../libs/fetcher";
import { News } from "../libs/types";
import FadeIn from "react-fade-in";
const Aes: NextPage = () => {
  const { data } = useSWR<News>(`/api/news`, fetcher);
  return (
    <>
      <FadeIn className="flex flex-col justify-center px-8 my-20">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 dark:text-white">
          <h1 className="pb-2 text-5xl font-bold text-white">News Fortnite</h1>
          <div className="flex-col items-center">
            <div className="mb-8"></div>
            <div className="grid grid-cols-1 gap-4 w-full">
              {data ? (
                <>
                  <div className="flex flex-col text-white">
                    {data?.motds.map((item) => {
                      return (
                        <>
                          {data ? (
                            <div className="w-full p-4 rounded-lg bg-white bg-opacity-20">
                              <div className="inline-flex text-white">
                                <div className="inline space-y-2">
                                  <img
                                    src={item.image}
                                    className="w-full rounded-lg z-50 bg-cover"
                                  />
                                  <div>
                                    <p className="text-xl">{item.title}</p>
                                  </div>
                                  <div>
                                    <p className="text-xl">{item.body}</p>
                                  </div>
                                  <div>
                                    <span className="text-lg">
                                      {item.tabTitle}
                                    </span>
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
                  </div>
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
