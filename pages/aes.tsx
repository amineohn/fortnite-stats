import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import Loading from "../components/Loading";
import fetcher from "../libs/fetcher";
import { AEs } from "../libs/types";
import FadeIn from "react-fade-in";
const Aes: NextPage = () => {
  const { data } = useSWR<AEs>(`/api/aes`, fetcher);
  return (
    <>
      <FadeIn className="flex flex-col justify-center px-8 my-20">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16 dark:text-white">
          <h1 className="pb-2 text-5xl font-bold text-white">
            Builds Fortnite
            <p className="text-xl">[{data ? data?.build : <Loading />}]</p>
          </h1>
          <div className="flex-col items-center">
            <div className="mb-8"></div>
            <div className="w-96 metric-card md:w-full bg-white bg-opacity-20 rounded-2xl p-4 h-80 overflow-auto">
              <p
                className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white"
                data-interception="off"
              >
                {data ? (
                  <>
                    <div className="flex flex-col text-white">
                      {data?.dynamicKeys.map((item) => {
                        return (
                          <>
                            <div className="grid space-y-2">
                              <div>
                                <span className="text-lg">pakFileName:</span>
                                <p className="text-xl">{item.pakFilename}</p>
                              </div>
                              <div>
                                <span className="text-lg">pakGuid:</span>
                                <p className="text-xl">{item.pakGuid}</p>
                              </div>
                              <div>
                                <span className="text-lg">key:</span>
                                <p className="text-xl">{item.key}</p>
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
      </FadeIn>
    </>
  );
};

export default Aes;
