'use client'
import React, {useEffect, useState} from 'react';
import WineCard from "@/components/dashboard/wine-card";
import {getTendenciesVintages} from "@/app/api/vintage";

const TendenciesWineCard = () => {
  const [wines, setWines] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true);
  const [orderBy, setOrderBy] = useState<any>('evolution_last_year');

  useEffect(() => {
    try {
      getTendenciesVintages(orderBy).then((res) => {
        setWines(res)
        setLoading(false);
      });
    } catch (error) {
      console.error('Error fetching wines:', error);
    }

  }, [orderBy]);

  const handleChangeOrderBy = (event: any) => {
    setWines([]);
    setOrderBy(event.target.value);
  };

  if (loading) {
    return <div>Loading wines...</div>;
  }
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-[#3DA680]">Meilleurs millésimes</h1>
      <label htmlFor="orderBy" className="text-[#3DA680]">Afficher la meilleure: </label>
      <select
        className="my-2 pl-3 pr-10 py-2 bg-[#101818] text-white border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        id="orderBy" value={orderBy} onChange={handleChangeOrderBy}>
        <option value="evolution_last_year">Evolution dernière année</option>
        <option value="evolution_5_years">Evolution sur 5 ans</option>
        <option value="evolution_15_years">Evolution sur 15 ans</option>
      </select>
      <WineCard wines={wines} orderBy={orderBy}/>
    </>
  )
    ;
};

export default TendenciesWineCard;
