import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

function PlayerStatus({ player }) {
  const data = [
    { name: "strength", x: player.strength },
    { name: "dexterity", x: player.dexterity },
    { name: "constitution", x: player.constitution },
    { name: "intelligence", x: player.intelligence },
    { name: "perspective", x: player.perspective },
    { name: "charisma", x: player.charisma },
  ];

  return (
    <RadarChart height={120} width={300} outerRadius="70%" data={data}>
      <PolarGrid stroke="#a0a0a0" />
      <PolarAngleAxis
        dataKey="name"
        tick={{ fill: "black" }}
        axisLine={{ stroke: "black" }}
      />
      <PolarRadiusAxis
        tick={{ fill: "transparent" }}
        axisLine={{ stroke: "transparent" }}
        domain={[0, 100]}
        allowDataOverflow={true}
      />  
      <Radar dataKey="x" stroke="green" fill="#82ca9d" fillOpacity={0.5} />
    </RadarChart>
  );
}

export default PlayerStatus;
