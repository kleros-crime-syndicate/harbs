import { useAdsQuery } from "api/ads";
import React from "react";
import { ipfs } from "utils/ipfs";

interface DemoProps {}

function shuffle<T>(array: T[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Demo: React.FC<DemoProps> = () => {
  const ads = shuffle(useAdsQuery());

  return (
    <div className="h-full w-full bg-[#232323] p-32">
      <div className="grid grid-cols-5 gap-8">
        <div className="flex flex-col p-8 width-1/5 border border-[#829941] rounded bg-[#4C504A]">
          <button className="uppercase my-4 text-5xl hover:outline hover:outline-2 hover:outline-[#829941] text-[#829941] rounded-full">
            Popular
          </button>
          <button className="uppercase my-4 text-5xl hover:outline hover:outline-2 hover:outline-[#829941] text-[#829941] rounded-full">
            Latest
          </button>
          <button className="uppercase my-4 text-5xl hover:outline hover:outline-2 hover:outline-[#829941] text-[#829941] rounded-full">
            Explore
          </button>
          <button className="uppercase my-4 text-5xl hover:outline hover:outline-2 hover:outline-[#829941] text-[#829941] rounded-full">
            Profile
          </button>
        </div>
        <div className="col-span-4 flex flex-col">
          <div className="grid grid-cols-5 bg-[#4C504A] border-[#829941] p-8 border rounded-full flex items-center mb-8">
            <div className="flex text-white flex-col items-center justify-center">
              <div className="mb-2 mr-8 flex items-center justify-center h-32 w-32 overflow-hidden outline outline-2 outline-[#829941] rounded-full">
                <img className="h-full w-fit" src="https://i.imgflip.com/2g5orf.jpg" />
              </div>
              <span>random guy</span>
            </div>
            <div className="col-span-4 flex flex-col text-white">
              <span className="text-5xl">What do I think about network states?</span>
              <div>
                <p>
                  On July 4, Balaji Srinivasan released the first version of his long-awaited new book describing his
                  vision for "network states": communities organized around a particular vision of how to run their own
                  society that start off as online clubs, but then build up more and more of a presence over time and
                  eventually become large enough to seek political autonomy or even diplomatic recognition.
                </p>
                <p>
                  Network states can be viewed as an attempt at an ideological successor to libertarianism: Balaji
                  repeatedly praises The Sovereign Individual (see my mini-review here) as important reading and
                  inspiration, but also departs from its thinking in key ways, centering in his new work many
                  non-individualistic and non-monetary aspects of social relations like morals and community. Network
                  states can also be viewed as an attempt to sketch out a possible broader political narrative for the
                  crypto space. Rather than staying in their own corner of the internet disconnected from the wider
                  world, blockchains could serve as a centerpiece for a new way of organizing large chunks of human
                  society.
                </p>
                <p>
                  These are high promises. Can network states live up to them? Do network states actually provide enough
                  benefits to be worth getting excited about? Regardless of the merits of network states, does it
                  actually make sense to tie the idea together with blockchains and cryptocurrency? And on the other
                  hand, is there anything crucially important that this vision of the world misses? This post represents
                  my attempt to try to understand these questions.
                </p>
                <p>...</p>
              </div>
            </div>
          </div>

          {ads && ads[0] && ads[0].uri && (
            <div className="w-full flex flex-col items-center justify-center mb-8">
              <img className="m-auto w-1/2" src={ipfs(ads[0].uri)} />
              <span className="text-white">Ad presented to you by Kleros Syndicate</span>
            </div>
          )}

          <div className="grid grid-cols-5 bg-[#4C504A] border-[#829941] p-8 border rounded-full flex items-center mb-8">
            <div className="flex text-white flex-col items-center justify-center">
              <div className="mb-2 mr-8 flex items-center justify-center h-32 w-32 overflow-hidden outline outline-2 outline-[#829941] rounded-full">
                <img className="h-full w-fit" src="https://i.imgflip.com/2g5orf.jpg" />
              </div>
              <span>random guy</span>
            </div>
            <div className="col-span-4 flex flex-col text-white">
              <span className="text-5xl">My 40-liter backpack travel guide</span>
              <div>
                <p>
                  Special thanks to Liam Horne for feedback and review. I received no money from and have never even met
                  any of the companies making the stuff I'm shilling here (with the sole exception of Unisocks); this is
                  all just an honest listing of what works for me today.
                </p>
                <p>
                  I have lived as a nomad for the last nine years, taking 360 flights travelling over 1.5 million
                  kilometers (assuming flight paths are straight, ignoring layovers) during that time. During this time,
                  I've considerably optimized the luggage I carry along with me: from a 60-liter shoulder bag with a
                  separate laptop bag, to a 60-liter shoulder bag that can contain the laptop bag, and now to a 40-liter
                  packpage that can contain the laptop bag along with all the supplies I need to live my life.
                </p>
                <p>
                  The purpose of this post will be to go through the contents, as well as some of the tips that I've
                  learned for how you too can optimize your travel life and never have to wait at a luggage counter
                  again. There is no obligation to follow this guide in its entirety; if you have important needs that
                  differ from mine, you can still get a lot of the benefits by going a hybrid route, and I will talk
                  about these options too.
                </p>
                <p>...</p>
              </div>
            </div>
          </div>

          {ads && ads[1] && ads[1].uri && (
            <div className="w-full flex flex-col items-center justify-center mb-8">
              <img className="m-auto w-1/2" src={ipfs(ads[1].uri)} />
              <span className="text-white">Ad presented to you by Kleros Syndicate</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
