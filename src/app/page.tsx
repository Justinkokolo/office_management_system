"use client";
import React, { useEffect, useState } from "react";
import OfficeCard from "@/components/office/office-card";
import RoundButton from "@/components/buttons/round-button";
import { useRouter } from "next/navigation";
import { OfficeData } from "@/types/office";

export default function Home() {
  const [offices, setOffices] = useState<OfficeData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedOffices = localStorage.getItem("offices");
    if (storedOffices) {
      setOffices(JSON.parse(storedOffices));
    }
  }, []);

  const handleAddButtonClick = () => {
    router.push("office/add");
  };

  return (
    <div className="m-5">
      <h1 className="flex text-2xl font-semibold justify-between my-10">
        All Offices
      </h1>
      {offices.map((office) => (
        <OfficeCard officeData={office} />
      ))}
      <RoundButton onClick={handleAddButtonClick} />
    </div>
  );
}
