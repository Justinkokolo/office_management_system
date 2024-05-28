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

  return (
    <div className="page-width relative ">
      <h1 className="flex text-2xl font-semibold justify-between mt-10 md:mb-7">
        All Offices
      </h1>
      <div className="grid md:grid-cols-2 md:gap-5">
        {offices.map((office) => (
          <OfficeCard
            key={office.officeId}
            officeData={office}
          />
        ))}
        <RoundButton onClick={() => router.push("/office/add")} />
      </div>
    </div>
  );
}
