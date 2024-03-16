import React from 'react';
interface WineCardProps {
  wines: any[];
  orderBy: string;
}
const WineCard: React.FC<WineCardProps> = ({ wines, orderBy }) => {
  const truncateToThirdDecimal = (num: number) => Math.floor(num * 1000) / 1000

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {wines.map((wine) => (
          <div key={wine.wine_id}
               className="flex border bg-[#030F17] rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer">
            <div className="w-1/3">
              <img src="/wine-placeholder.png" alt={`Image of ${wine.wine_name}`}
                   className="object-cover w-full h-full"/>
            </div>

            <div className="w-2/3 p-4 ">
              <h2 className="text-xl text-[#3DA680] font-semibold">{wine.wine_name} - {wine.vintage_year}</h2>
              <p className="text-gray-300">{wine.wine_region} - {wine.wine_appellation}</p>
              <p className="text-gray-300">Evolution dernière
                année: {truncateToThirdDecimal(wine.evolution_last_year) || "N/A"} %</p>
              <p className="text-gray-300">Evolution sur 5
                ans: {truncateToThirdDecimal(wine.evolution_5_years) || "N/A"} %</p>
              <p className="text-gray-300">Evolution sur 15
                ans: {truncateToThirdDecimal(wine.evolution_15_years) || "N/A"} %</p>
              <p className="text-gray-300">Prix moyen: {truncateToThirdDecimal(wine.average_price)} €</p>
              <p className="text-gray-300">Prix le plus bas: {wine.min_price} €</p>
              <p className="text-gray-300">Prix le plus élevé: {wine.max_price} €</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WineCard;
