"use client";

import React from "react";
import { Clothe } from "@/types";

export default function ClotheCard({ clth }: { clth: Clothe }) {
  return (
    <div>
      <h1>{clth.name}</h1>
      <h2>{clth.type}</h2>
      <h3>{clth.price}</h3>
    </div>
  );
}
