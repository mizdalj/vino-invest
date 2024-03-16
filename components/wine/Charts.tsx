'use client';

import "./charts.css"
import AreaChartPlot from "./AreaChartPlot";
import BarChartPlot from "./BarChartPlot";
import PieChartPlot from "./PieChartPlot";
import LineChartPlot from "./LineChartPlot";
import RadarChartPlot from "./RadarChartPlot";
import {useEffect, useState} from "react";
import {getWine} from "@/app/api/wine";

const WineCharts = ({wineId} :any) => {
  const [wine, setWine] = useState<any>(null);

  useEffect(() => {
    getWine(wineId).then((data) => {
      setWine(data);
    });
  }, []);
  return (
    <>
      <section>
        <div className="charts_div_top">
          <div className="charts_div_top_section">
              <p className="charts_div_top_title">Number of boattles bought</p>
              <p className="charts_div_top_content">25 </p>
              <p className="charts_div_top_tendance">+15%</p>
          </div>
          <div className="charts_div_top_section">
              <p className="charts_div_top_title">Total investment</p>
              <p className="charts_div_top_content">$15,000 </p>
              <p className="charts_div_top_tendance">+25%</p>
          </div>
          <div className="charts_div_top_section">
              <p className="charts_div_top_title">Total sales</p>
              <p className="charts_div_top_content">$8,000 </p>
              <p className="charts_div_top_tendance">+5%</p>
          </div>
          <div className="charts_div_top_section">
              <p className="charts_div_top_title">Check your wallet</p>
          </div>
        </div>
      </section>

      <section className="charts_div_middle">
        <div className="charts_div_middle_section">
          <h4 className="charts_div_middle_title">Wines tendancies</h4>
          <AreaChartPlot />
        </div>
        <div className="charts_div_middle_section">
        <h4 className="charts_div_middle_title">Investment & Sells</h4>
          <BarChartPlot />
        </div>
      </section>

      <section className="charts_div_foot">
        <div className="charts_div_foot_section">
        <h4 className="charts_div_middle_title">Wines choices</h4>
          <PieChartPlot/>
        </div>
        <div className="charts_div_foot_section">
        <h4 className="charts_div_middle_title">Wines predictions</h4>
          <LineChartPlot/>
        </div>
        <div className="charts_div_foot_section">
        <h4 className="charts_div_middle_title">Investment tendancies</h4>
          <RadarChartPlot/>
        </div>
      </section>
    </>
  );
};

export default WineCharts;
