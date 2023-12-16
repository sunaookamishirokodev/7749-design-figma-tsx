import Pic1 from "./pic-1.png";
import Pic2 from "./pic-2.png";
import Pic3 from "./pic-3.png";
import Pic4 from "./pic-4.png";
import Image from "next/image";

export default function ListItem() {
  return (
    <div>
      <div className="relative flex justify-center my-10">
        <div className="bg-black/10 w-[40%] h-[1px]" />
        <div className="absolute left-[37%] right-[37%] -top-3 flex justify-center bg-white">
          We share our thoughts on design
        </div>
      </div>
      <ul className="flex flex-wrap justify-center">
        {[
          {
            pic: Pic1,
            content: "Redesigning my site increased sales by over 400% in one week.",
            date: "Jul 1,2020",
          },
          {
            pic: Pic2,
            content: "Design handoff: What engineers really want to see.",
            date: "Jul 1,2020",
          },
          {
            pic: Pic3,
            content: "A comprehensive list of human-computer interactions.",
            date: "Jul 1,2020",
          },
          {
            pic: Pic4,
            content: "Why do people hate redesign?",
            date: "Jul 1,2020",
          },
        ].map(({ pic, content, date }, i) => {
          return (
            <li key={i} className="w-[220px] mx-2.5">
              <Image src={pic} style={{ width: "100%", height: "auto" }} alt="" />
              <h3 className="my-2.5 leading-5 font-bold text-[15px]">{content}</h3>
              <span className="text-sm text-black/50">{date}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
