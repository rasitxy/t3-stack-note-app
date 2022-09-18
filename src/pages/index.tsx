import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  
  const prismaExample = trpc.useQuery(["example.getAll"]);

  return (
    <>
      <Head>
        <title>T3 Stack Note App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[4rem] leading-normal font-extrabold text-gray-700 mb-4">
          T3 Stack <span className="text-blue-600 sh">Note</span> App
        </h1>
        <nav className="flex justify-center space-x-4 space-x-4">
          <Link href="/about">
            <a className="border border-indigo-800 border-slate-300 hover:border-slate-400 px-3 py-2 text-slate-700 hover:bg-slate-100  hover:text-slate-900">
              About
            </a>
          </Link>
          <Link href="/notes">
            <a className="border border-indigo-800 border-slate-300 hover:border-slate-400 px-3 py-2 text-slate-700 hover:bg-slate-100  hover:text-slate-900">
              Notes
            </a>
          </Link>
          <Link href="/notes/create">
            <a className="border border-indigo-800 border-slate-300 hover:border-slate-400 px-3 py-2 text-slate-700 hover:bg-slate-100  hover:text-slate-900">
              Create A Note
            </a>
          </Link>
        </nav>
  
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Home;
