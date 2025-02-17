import React from "react";

export const Card = ({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title?: string;
}>) => {
  return (
    <div className="relative p-8 min-w-[10rem] bg-white border-black border-2 rounded-xl active">
      {title && (
        <div className=" ">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      )}

      {children}
    </div>
  );
};
