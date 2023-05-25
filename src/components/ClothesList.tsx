"use client";
import { getAllClothes } from "@/api/clothes";
import { useEffect, useState } from "react";
import ClotheCard from "./ClotheCard";

export default function ClothesList() {
  const [clothes, setClothes] = useState([]);
  const getData = async () => {
    const clths = await getAllClothes();
    setClothes(clths.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-5 border border-solid border-slate-600">
      {clothes.map((clth, i) => (
        <ClotheCard clth={clth} key={i} />
      ))}
    </div>
  );
}
