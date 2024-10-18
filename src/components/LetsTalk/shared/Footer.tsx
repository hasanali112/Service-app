import Image from "next/image";
import phone from "@/assets/Calling.svg";
import message from "@/assets/Vector.png";
import facebook from "@/assets/Path.png";
import twitter from "@/assets/Vector (1).png";
import instagram from "@/assets/004-instagram.png";

const Footer = () => {
  return (
    <footer className="bg-[#000e1f] text-white py-10 rounded-2xl ">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="xl:px-[81px] xl:pt-[40px] px-4">
          {/* footer upper part */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div>
              <div className="flex gap-20">
                <div className="relative -translate-y-3">
                  <div
                    style={{
                      clipPath: "polygon(49% 31%, 96% 5%, 76% 65%, 32% 100%)",
                    }}
                    className="w-[55px] h-[55px] bg-gray-200 rotate-[30deg] absolute top-0 left-0"
                  ></div>
                  <div
                    style={{
                      clipPath: "polygon(49% 31%, 96% 5%, 76% 65%, 32% 100%)",
                    }}
                    className="w-[55px] h-[55px] bg-blue-500 rotate-[93deg] absolute top-[-1px] left-[14px]"
                  ></div>
                </div>
                <h1 className="text-[24.25px]">Santolocorl</h1>
              </div>
              <p className="mt-5 xl:w-[70%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                labore sit atque, ullam maxime eius quam! Praesentium hic
                architecto facilis!
              </p>
            </div>
            <div>
              <h1 className="text-[24.25px] ">CONTACT & INFORMATION</h1>
              <div className="pt-[28px] flex flex-col xl:flex-row gap-10 xl:gap-28">
                <div className="flex gap-5">
                  <div className="bg-[#ffff]/30 w-[55.97px] h-[55.97px] flex justify-center items-center rounded-2xl border border-gray-400">
                    <div className="bg-white rounded-2xl w-[40px] h-[40px] flex justify-center">
                      <Image
                        src={phone}
                        alt="person"
                        width={19.49}
                        height={19.49}
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl tracking-wider font-extralight">
                      Email Address
                    </h1>
                    <p className="mt-[10px] font-semibold">
                      Santolocorl@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="bg-[#ffff]/30 w-[55.97px] h-[55.97px] flex justify-center items-center rounded-2xl border border-gray-400">
                    <div className="bg-white rounded-2xl w-[40px] h-[40px] flex justify-center items-center">
                      <Image
                        src={message}
                        alt="person"
                        width={20.43}
                        height={20.43}
                        className="w-[20.43px] h-[20.43px]"
                      />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl tracking-wider font-extralight">
                      Phone Number
                    </h1>
                    <p className="mt-[10px] font-semibold">1-929-269-1487</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b mt-[97px]"></div>

          <div className="mt-[34px] mb-[37px] flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-between items-center gap-10">
            <h1 className="xl:text-[18px] text-sm tracking-widest ">
              © 2022 <span className="uppercase">Santolocorl</span>. All Rights
              Reserved
            </h1>
            <div className="flex  gap-5">
              <h1>FOLLOW ME ON</h1>
              <div className="flex gap-5">
                <Image
                  src={facebook}
                  alt="person"
                  width={8.74}
                  height={17.47}
                  className="w-[8.74px] h-[17.47px]"
                />
                <Image
                  src={twitter}
                  alt="person"
                  width={15.54}
                  height={16.32}
                  className="w-[15px] h-[17.47px]"
                />
                <Image
                  src={instagram}
                  alt="person"
                  width={19.37}
                  height={19.37}
                  className="w-[19.37px] h-[19.37px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
