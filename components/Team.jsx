"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function Team() {
    return (
        (<div className="">
            <h1
                className="text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 uppercase to-neutral-400 bg-opacity-50 max-sm:pt-[60rem] max-md:my-40 md:mb-40 pb-2">
                the team
            </h1>

            <div className="flex gap-4 justify-evenly items-center flex-wrap p-4">
                <BackgroundGradient className="rounded-[22px] max-w-sm m-1 sm:p-10 bg-white dark:bg-zinc-900">
                    <img
                        src={`https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp`}
                        alt="jordans"
                        height="400"
                        width="400"
                        className="object-contain" />
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        Air Jordan 4 Retro Reimagined
                    </p>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                        February 17, 2024. Your best opportunity to get these right now is by
                        entering raffles and waiting for the official releases.
                    </p>


                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 m-1 sm:p-10 bg-white dark:bg-zinc-900">
                    <img
                        src={`https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp`}
                        alt="jordans"
                        height="400"
                        width="400"
                        className="object-contain" />
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        Air Jordan 4 Retro Reimagined
                    </p>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                        February 17, 2024. Your best opportunity to get these right now is by
                        entering raffles and waiting for the official releases.
                    </p>

                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 m-1 sm:p-10 bg-white dark:bg-zinc-900">
                    <img
                        src={`https://cdn.prod.website-files.com/644f5df7f9e72f4d074c8f00/6507ed863085cf26d118723f_Opendrone2-p-1600.webp`}
                        alt="jordans"
                        height="400"
                        width="400"
                        className="object-contain" />
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        Air Jordan 4 Retro Reimagined
                    </p>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                        February 17, 2024. Your best opportunity to get these right now is by
                        entering raffles and waiting for the official releases.
                    </p>

                </BackgroundGradient>
            </div>
        </div>)
    );
}
