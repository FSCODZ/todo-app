"use client"; 
import { useRouter } from "next/navigation"; 

const LandingPage = () => {
  const router = useRouter();

  const goToTodoList = () => {
    router.push("/todo"); 
  };

  return (
    <section className="text-gray-600 body-font h-screen flex bg-gray-900 bg-svg-constellation-gray-100 relative">
      <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
        <div className="lg:w-2/3 w-full animate-fade-in-down">
          <h1 className="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
            Welcome
          </h1>
          <h1 className="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
            I’m here to assist{" "}
            <span className="border-b-4 border-green-400 -mb-20"></span> with
            your todos for the day.
          </h1>
          <p className="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
            I am here to help you with your planning for the day
          </p>
          <button
            onClick={goToTodoList}
            className="uppercase rounded-sm bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 font-bold text-white px-8 py-4 mx-auto">
            Go to Todo List
          </button>
        </div>
      </div>
     
    </section>
  );
};

export default LandingPage;
