import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-[1110px] w-full m-auto flex flex-col gap-[64px] md:gap-[71px]">
      <div className="flex gap-[64px] md:gap-[30px] md:flex-row flex-col">
        <div className="flex flex-col gap-6 md:gap-[28px] max-w-[730px]">
          <Image
            alt="hero"
            src={"/image-web-3-desktop.jpg"}
            height={300}
            width={730}
            className="md:block hidden"
          />
          <Image
            alt="hero"
            src={"/image-web-3-mobile.jpg"}
            height={300}
            width={343}
            className="md:hidden block w-full"
          />
          <div className="flex gap-4 md:gap-[30px] items-center md:flex-row flex-col">
            <h1 className="md:text-[56px] text-[40px] font-extrabold leading-[40px] md:leading-[56px] text-[#00001A] basis-1/2">
              The Bright Future of Web 3.0?
            </h1>
            <div className="flex flex-col gap-6 md:gap-[29px] basis-1/2">
              <p className="max-w-prose leading-[26px] text-[#5E607A]">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className="w-fit bg-[#F15D51] hover:bg-[#00001A] text-[#FFFDFA] uppercase tracking-[4.38px] font-bold text-[14px leading-6] pt-[13px] pb-[11px] pl-[31px] pr-[35px]">Read More</button>
            </div>
          </div>
        </div>
        <div className="bg-[#00001A] px-6 py-8">
          <h2 className="text-[#E9AA52] font-bold leading-10 text-[40px] mb-[34px]">New</h2>
          <div className="flex flex-col gap-[31px]">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#FFFDFA] leading-6 text-xl font-extrabold hover:cursor-pointer hover:text-[#E9AA52]">Hydrogen VS Electric Cars</h3>
              <p className="text-[#C5C6CE]">Will hydrogen-fueled cars ever catch up to EVs?</p>
              <div className="h-[1px] w-full bg-[#5E607A] mt-[29px]"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#FFFDFA] leading-6 text-xl font-extrabold hover:cursor-pointer hover:text-[#E9AA52]">The Downsides of AI Artistry</h3>
              <p className="text-[#C5C6CE]">What are the possible adverse effects of on-demand AI image generation?</p>
              <div className="h-[1px] w-full bg-[#5E607A] mt-[29px]"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#FFFDFA] leading-6 text-xl font-extrabold hover:cursor-pointer hover:text-[#E9AA52]">Is VC Funding Drying Up?</h3>
              <p className="text-[#C5C6CE]">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 md:gap-[30px] md:flex-row flex-col">
        <div className="flex gap-6 basis-1/3 group hover:cursor-pointer ">
          <Image
            alt="Retro"
            src={"/image-retro-pcs.jpg"}
            width={100}
            height={127}
          />
          <div className="flex flex-col justify-between ">
            <h3 className="text-[#C5C6CE] font-bold leading-[32px] text-[32px]">01</h3>
            <p className="text-[#00001A] text-lg leading-[24px] font-extrabold group-hover:text-[#F15D51]">Reviving Retro PCs</p>
            <p className="text-[#5E607A]">What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="flex gap-6 basis-1/3 group hover:cursor-pointer">
          <Image
            alt="Retro"
            src={"/image-top-laptops.jpg"}
            width={100}
            height={127}
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-[#C5C6CE] font-bold leading-[32px] text-[32px]">02</h3>
            <p className="text-[#00001A] text-lg leading-[24px] font-extrabold group-hover:text-[#F15D51]">Top 10 Laptops of 2022</p>
            <p className="text-[#5E607A]">Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="flex gap-6 basis-1/3 group hover:cursor-pointer">
          <Image
            alt="Retro"
            src={"/image-gaming-growth.jpg"}
            width={100}
            height={127}
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-[#C5C6CE] font-bold leading-[32px] text-[32px]">03</h3>
            <p className="text-[#00001A] text-lg leading-[24px] font-extrabold group-hover:text-[#F15D51]">The Growth of Gaming</p>
            <p className="text-[#5E607A]">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
