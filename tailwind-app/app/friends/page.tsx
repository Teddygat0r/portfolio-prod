
import { Analytics } from "@vercel/analytics/react";
import Friend from "./components/friend";
import FriendDetails from "../interfaces/FriendProps";

const friends: FriendDetails[] = [
    {
        desc: "Return to my page :)",
        name: "⏎ Go Back",
        url: "/",
    },
    {
        desc: "🔥🔥🔥🔥🔥",
        name: "Ryan Mar",
        url: "https://ryanmar.vercel.app/",
        image: "/friends/rm.png"
    }
]

export default function Home() {
    return (
        <div className="flex h-full flex-col justify-center mx-[10%]">
            <div className="flex flex-col items-center justify-center gap-4 mt-8">
                <h1 className="text-3xl font-bold text-white">Check out my Friends!</h1>
                <div className="h-[2px] w-[80%] rounded-full bg-gradient-to-r from-violet-800 to-violet-600"></div>
            </div>

            <div className="grid grid-cols-2 gap-12 p-8">
                {friends.map((friend, index) => (
                    <Friend key={index} {...friend} />
                ))}
            </div>
            <Analytics />
        </div>
    );
}
