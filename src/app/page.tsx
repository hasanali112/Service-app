import LetsTalks from "@/components/LetsTalk/LetsTalks";
import Footer from "@/components/LetsTalk/shared/Footer";

const Home = () => {
  return (
    <div className="bg-[#000811] relative overflow-hidden ">
      <div className="w-[420px] h-[420px] bg-blue-600 absolute top-10 -right-[350px] rounded-full blur-[100px]"></div>
      <div className="w-full max-w-[1400px] mx-auto px-[20px]">
        <div>
          <LetsTalks />
        </div>
      </div>
      <div className="px-[22px] pb-[20px]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
