interface ButtonProps {
  type: "white" | "black";
  children: React.ReactNode;
}

export default function Button({ type, children }: ButtonProps) {
  return (
    <>
      {type === "white" && (
        <button className="border border-gray-400 bg-(--white) text-black px-10 py-2 rounded-2xl hover:bg-black  hover:text-white transition-colors">
          {children}
        </button>
      )}
      {type === "black" && (
        <button className="border bg-black text-(--white) px-10 py-2 rounded-2xl hover:bg-white  hover:text-black transition-colors">
          {children}
        </button>
      )}
    </>
  );
}
