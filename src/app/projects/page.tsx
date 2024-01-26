"use client";
import Card from "../components/card";
import Navigation from "../components/navigation";
import cardsData from "../data/projects.json";

export default function Page() {
  return (
    <div>
      <Navigation location="Contact" href="/contact" />

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 max-w-screen-xl mx-auto px-4 mb-12 h-screen">
        <div className="col-span-2">
          <h2 className="text-3xl font-bold font-mono text-slate-300">Projects</h2>
          <p className="mt-4 mr-12 font-mono text-slate-300 text-pretty">Here are the projects that I have done with my friends, some alone!</p>
        </div>
        {cardsData.map((card, index) => (
          <Card key={index} header={card.header} content={card.content} />
        ))}
      </div>
    </div>
  );
}
// {/* header */}
// {/* <div className="flex flex-col items-left ml-12 mt-10 w-screen h-screen">
//   <h2 className="text-3xl font-bold font-mono text-slate-400">Projects</h2>
//   <p className="mt-4 mr-12 font-mono text-slate-400 text-pretty">Here are the projects that I have done with my friends, some alone!</p>
// </div> */}
// {/* cards */}

// {/* <div className="bg-white cursor-pointer" onClick={handleShowModal}>
//   sajdiasjdasjdjadsijaisjdiasdjiasjdiadjsijijidjaijdijaidjaids
// </div>
// <div className="bg-white cursor-pointer">sajdiasjdasjdjadsijaisjdiasdjiasjdiadjsijijidjaijdijaidjaids</div>
// <div className="bg-white cursor-pointer">sajdiasjdasjdjadsijaisjdiasdjiasjdiadjsijijidjaijdijaidjaids</div>
// <div className="bg-white cursor-pointer">sajdiasjdasjdjadsijaisjdiasdjiasjdiadjsijijidjaijdijaidjaids</div> */}
