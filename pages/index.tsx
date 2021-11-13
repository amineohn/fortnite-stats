import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import fetcher from "../libs/fetcher";
import FadeIn from "react-fade-in";
import { Shop } from "../libs/types";
const Home: NextPage = () => {
  const { data } = useSWR<Shop>(`/api/shop`, fetcher);
  return (
    <>
      <FadeIn className="flex flex-col justify-center my-5 px-8">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 dark:text-white">
          <h1 className="text-5xl font-bold text-white mb-2">Shop</h1>
          <div className="flex-col justify-center items-center space-y-5">
            <div className="grid grid-cols-1 mx-5 my-2 space-y-3 mb-2">
              <div className="flex justify-center"></div>
              <div className="w-full max-w-7xl rounded-2xl p-4 h-80 pr-6">
                <p
                  className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white"
                  data-interception="off"
                >
                  <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 w-full">
                    {data?.featured?.entries[0]?.items?.map((item) => {
                      return (
                        <>
                          {data ? (
                            <div className="w-full p-4 rounded-lg bg-white bg-opacity-20">
                              <div className="inline-flex text-gray-200">
                                <div className="grid space-y-2">
                                  <img
                                    src={item.images.smallIcon}
                                    className="w-full z-50 bg-cover"
                                  />
                                  <div>
                                    <p className="text-xl">{item.name}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="inline-flex m-auto">
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-lg rounded-r-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-lg rounded-l-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })}
                    {data?.daily?.entries[0]?.items?.map((item) => {
                      return (
                        <>
                          {data ? (
                            <div className="w-full p-4 rounded-lg bg-white bg-opacity-20">
                              <div className="inline-flex text-gray-200">
                                <div className="grid space-y-2">
                                  <img
                                    src={item.images.smallIcon}
                                    className="w-full z-50 bg-cover"
                                  />
                                  <div>
                                    <p>{item.name}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="inline-flex m-auto">
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-lg rounded-r-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-lg rounded-l-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })}
                    {data?.specialFeatured?.entries[0]?.items?.map((item) => {
                      return (
                        <>
                          {data ? (
                            <div className="w-full p-4 rounded-lg bg-white bg-opacity-20">
                              <div className="inline-flex text-gray-200">
                                <div className="grid space-y-2">
                                  <img
                                    src={item.images.smallIcon}
                                    className="w-full z-50 bg-cover"
                                  />
                                  <div>
                                    <p>{item.name}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="inline-flex m-auto">
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-lg rounded-r-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                              <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-lg rounded-l-none bg-white bg-opacity-20 animate-pulse">
                                <div className="inline-flex text-gray-200">
                                  <div className="grid space-y-2"></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })}
                    {data ? (
                      <div className="w-full p-4 rounded-lg bg-white bg-opacity-20">
                        <div className="inline-flex text-gray-200">
                          <div className="grid space-y-2">
                            <img
                              src={data.featured?.entries[0]?.bundle.image}
                              className="w-full z-50 bg-cover"
                            />
                            <div>
                              <p>{data.featured?.entries[0]?.bundle.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="inline-flex m-auto">
                          <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-lg rounded-r-none bg-white bg-opacity-20 animate-pulse">
                            <div className="inline-flex text-gray-200">
                              <div className="grid space-y-2"></div>
                            </div>
                          </div>
                          <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-none bg-white bg-opacity-20 animate-pulse">
                            <div className="inline-flex text-gray-200">
                              <div className="grid space-y-2"></div>
                            </div>
                          </div>
                          <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-none bg-white bg-opacity-20 animate-pulse">
                            <div className="inline-flex text-gray-200">
                              <div className="grid space-y-2"></div>
                            </div>
                          </div>
                          <div className="space-x-3 w-40 justify-center p-4 h-52 rounded-lg rounded-l-none bg-white bg-opacity-20 animate-pulse">
                            <div className="inline-flex text-gray-200">
                              <div className="grid space-y-2"></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
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
