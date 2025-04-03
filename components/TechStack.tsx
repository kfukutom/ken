// components/TechStack.tsx
"use client";

import Image from "next/image";

// icons
import CPP from "@/Icons/c++.png";
import C from "@/Icons/c.png";
import PY from "@/Icons/py.png";
import TS from "@/Icons/ts.png";
import JS from "@/Icons/js.png";
import MATERIAL from "@/Icons/Material.png";
import TW from "@/Icons/tail.png";
import FLASK from "@/Icons/flask.png";
import SQL from "@/Icons/postgresql.png";

export default function TechStack() {
  return (
    <>
      <div className="my-3.5 flex flex-row gap-2">
        <Image src={CPP} alt="CPP-Icon" width={30} height={30} />
        <Image src={C} alt="C-Icon" width={30} height={30} />
        <Image src={PY} alt="Python-Icon" width={30} height={30} />
        <Image src={TS} alt="TS-Icon" width={30} height={30} />
        <Image src={JS} alt="JS-Icon" width={30} height={30} />
      </div>
      <div className="my-3.5 flex flex-row gap-2">
        <Image src={MATERIAL} alt="Material-Icon" width={30} height={30} />
        <Image src={TW} alt="Tailwind-Icon" width={30} height={30} />
        <Image src={FLASK} alt="Flask-Icon" width={30} height={30} />
        <Image src={SQL} alt="PostgreSQL-Icon" width={30} height={30} />
      </div>
    </>
  );
}