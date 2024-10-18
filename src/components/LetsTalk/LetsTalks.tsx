import Image from "next/image";
import person from "@/assets/_7 - Bart 1.png";

const LetsTalks = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-10 justify-center items-center text-white xl:pl-[171px] xl:pr-[128px] pt-10">
      <div className="lg:-translate-y-10 lg:translate-x-16">
        <h1 className="text-[48px] font-bold">let&apos;s talk</h1>
        <p className="lg:w-[65%] ">
          Do you have some questions? Want to grab a coffee? Plan a call with
          the button below
        </p>
        <button className="bg-[#0096fb] px-[32px] py-[12px] rounded-[15px] mt-[13px]">
          Book an Consultancy
        </button>
      </div>
      <div>
        <Image
          src={person}
          alt="person"
          width={508}
          height={508}
          className="lg:w-[408px] lg:h-[503px] object-cover"
        />
      </div>
    </div>
  );
};

export default LetsTalks;
