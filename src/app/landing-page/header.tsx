export default function Header() {
  return (
    <header className="flex flex-col items-center gap-6 py-28 bg-[#FFFCF8] text-[#14203E] text-center">
      <h1 className="font-black text-5xl max-w-[40%]">A modern way to build website.</h1>
      <h3 className="font-bold max-w-[44%]">
        Empower designers to build professional, custom websites in a competely visual canvas with no code.
      </h3>
      <button className="py-5 px-6 bg-[#2D353D] text-white text-sm rounded-lg">Start free trial</button>
    </header>
  );
}
