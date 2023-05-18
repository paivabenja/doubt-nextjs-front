"use client";
import { getAllClothes } from "@/api/clothes";
import { useEffect, useState } from "react";

export default function ClothesList() {
  const [clothes, setClothes] = useState([]);
  const getData = async () => {
    const clths = await getAllClothes();
    console.log(clths);
    setClothes(clths.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-5 border border-solid border-slate-600">
      {clothes.map((clth, i) => (
        <div key={i}>
          <h1>{clth.name}</h1>
        </div>
      ))}
    </div>
  );
}
