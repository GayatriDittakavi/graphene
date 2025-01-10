"use client";

import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
      id: 1,
      name: " Krishna Chaitanya",
      designation: "Product Advisor",
      image:
        "https://res.cloudinary.com/dafbhjsmx/image/upload/v1736510473/1726304455679_yjkz03.jpg",
    },
    {
      id: 2,
      name: "Gayatri Dittakavi",
      designation: "Founder",
      image:
        "https://res.cloudinary.com/dafbhjsmx/image/upload/v1736510652/cropped_l5pbyt.jpg",
    },
    {
      id: 3,
      name: "Maruthi Annamaraju",
      designation: "PhD, GaTech",
      image:
        "https://res.cloudinary.com/dafbhjsmx/image/upload/v1736510546/marty_ii6egj.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://res.cloudinary.com/dafbhjsmx/image/upload/v1736509774/render_1-removebg-preview_bdw2ko.png",
    },
  ];

const Footer = () => {
    return (
        <section className="py-32 text-white font-sans">
            <div className="container ">
                <footer className="w-screen">
                    <div className="grid grid-cols-3  gap-8 content-end w-screen">
                        <div className="col-span-2 mb-8 ml-4 lg:mb-0 ">
                            <span className="mb-80 h-7 text-2xl font-bold">Our Team</span>
                            <div className="flex mt-4 gap-6">

                                <div className="flex flex-row items-center justify-center ">
                                    <AnimatedTooltip items={people} />
                                </div>
                                <div className="flex gap-4 pl-4 mt-2">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                </a>
                                </div>
                            </div>
                        </div>

                        <button className="md:mx-auto no-underline group cursor-pointer relative shadow-2xl  rounded-full p-px text-xs font-semibold leading-6 text-white inline-block max-w-40 ">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ring-1 ring-white/10 border-white border-[0.5px]">
                                <a href="#">Schedule a Demo</a>
                                <svg
                                    fill="none"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    width="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] transition-opacity duration-500 group-hover:opacity-40" />
                        </button>


                    </div>
                    <div className="mt-10 w-screen flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center px-2">
                        <p>© 2024 Graphene Labs. All rights reserved.</p>
                        <ul className="flex gap-4">
                            <li className="text-white hover:text-zinc-400 underline ">
                                <a href="#"> Email Us</a>
                            </li>
                            <li className="underline hover:text-primary">
                                <a href="#">Newsletter Subscription</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;
