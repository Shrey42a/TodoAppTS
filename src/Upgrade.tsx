import Header from "./Header";
import Footer from "./Footer";

function Upgrade() {
  return (
    <>
      <div className="bg11">
        <Header />
        <div className="h-screen flex flex-col items-center mt-12 p-2 lg:mt-1 justify-top">
          <div className="bg-white/20 rounded-lg p-2 m-2 flex-col lg:flex-row lg:h-1/2 h-4/5 w-full lg:w-4/5 flex justify-between items-center">
            <div className="h-full w-full flex hover:scale-125 ease-in-out transition items-center justify-center lg:border-black">
              <div className="rounded-sm  h-4/5 w-1/2 justify-evenly flex items-center flex-col">
                <h1 className="text-5xl h1">Basic</h1>
                <h1 className="text-3xl nav">$20\Yr</h1>
                <a href="/card"><button className="bg-gradient-to-r from-zinc-200 via-purple-200 to-teal-100 rounded-md hover:bg-lime-400 shadow-sm shadow-zinc-800 p-2 px-8">Buy</button></a>
              </div>
            </div>
            <div className="h-full w-full ease-in-out transition  flex hover:scale-125 items-center justify-center border-black">
              <div className="rounded-sm  h-4/5 w-1/2 justify-evenly flex items-center flex-col">
                <h1 className="text-5xl h1">Moderate</h1>
                <h1 className="text-3xl nav">$40\Yr</h1>
                <a href="/card"><button className="bg-gradient-to-r from-zinc-200 via-purple-200 to-teal-100 rounded-md hover:bg-lime-400 shadow-sm shadow-zinc-800 p-2 px-8">Buy</button></a>
              </div>
            </div>
            <div className="h-full w-full ease-in-out transition  flex hover:scale-125 items-center justify-center">
              <div className="rounded-sm  h-4/5 w-1/2 justify-evenly flex items-center flex-col">
                <h1 className="text-5xl h1">Premium</h1>
                <h1 className="text-3xl nav">$100\Yr</h1>
                <a href="/card"><button className="bg-gradient-to-r from-zinc-200 via-purple-200 to-teal-100 rounded-md hover:bg-lime-400 shadow-sm shadow-zinc-800 p-2 px-8">Buy</button></a>
              </div>
            </div>
          </div>
          <a href="/"><button className="bn32 p-2 px-8 rounded-md font-bold text-xl">Home</button></a>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Upgrade;