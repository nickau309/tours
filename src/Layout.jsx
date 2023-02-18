import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen justify-center bg-slate-100 text-slate-800">
      <main className="my-12 w-11/12 max-w-7xl md:my-16">{children}</main>
    </div>
  );
}
