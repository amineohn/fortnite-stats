import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import Loading from "../components/Loading";
import fetcher from "../libs/fetcher";
import FadeIn from "react-fade-in";
import { Shop } from "../libs/types";
const Home: NextPage = () => {
  const { data } = useSWR<Shop>(`/api/shop`, fetcher);
  return (
    <>
      <FadeIn className="flex flex-col justify-center px-8 my-36">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 dark:text-white">
          <h1 className="text-5xl font-bold text-white mb-2">Shop</h1>
          <div className="flex-col justify-center items-center space-y-5">
            <div className="grid grid-cols-1 mx-5 my-2 space-y-3 mb-2">
              <div className="flex justify-center"></div>
              <div className="w-full metric-card max-w-7xl bg-white bg-opacity-20 rounded-2xl p-4 h-80 overflow-auto pr-6">
                <p
                  className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white"
                  data-interception="off"
                >
                  {data ? (
                    <>
                      <div className="flex flex-col text-gray-200">
                        {data?.featured.items?.map((item) => {
                          return (
                            <>
                              <div className="grid space-y-2">
                                <div>
                                  <span>name:</span>
                                  <p>{item.name}</p>
                                </div>
                                <div>
                                  <span>image:</span>
                                  <p>{item.images.featured}</p>
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

export default Home;