import Header from "./Header";
import Footer from "./Footer";

function Card() {

  function handleSubmit() {
    alert("Thnx for subscribing");
  }

  return (
    <>
      <div className="bg11">
        <Header />
        <div className="h-screen flex justify-center mt-12">
          <div className="h-max w-full lg:w-1/2 bg-white/40 outline-none/10 rounded-md backdrop-blur-sm shadow py-4 p-2 flex flex-col">
            <div className="flex justify-between px-6">
              <h1 className="lg:text-4xl text-lg font-semibold">Edit Payment method</h1>
              <a href="/"><button className="font-bold text-xl">X</button></a>
            </div>
            <div className="flex flex-col items-center py-2 px-1">
              <div className="flex flex-col w-4/5 space-y-4">
                <div>
                  <label className="">Card Holder*</label>
                  <input required type="text" className="w-full py-2 px-2  rounded-md bg-white/40 outline-none"></input></div>
                <div>
                  <label>Debit/Credit card number*</label>
                  <input required type="number" className="w-full py-2 px-2  rounded-md bg-white/40 outline-none"></input></div>
                <div className="flex flex-col lg:flex-row justify-between">
                  <div>
                    <label className="">Expiration*</label>
                    <input required type="date" className="w-full px-2 py-2  rounded-md bg-white/40 outline-none"></input></div>
                  <div>
                    <label>CVV*</label>
                    <input required type="number" className="w-full px-2 py-2  rounded-md bg-white/40 outline-none"></input></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center p-2 px-4 space-y-1 lg:flex-row">
              <h1>* This field is mandatory</h1>
              <div className="space-x-4 p-2">
                <a href="/upgrade"><button className="px-4 py-2 shadow-sm rounded-md shadow-zinc-500">Cancel</button></a>
                <button onClick={handleSubmit} className="px-4 py-2 shadow-sm rounded-md shadow-zinc-500">Upgrade</button></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Card;