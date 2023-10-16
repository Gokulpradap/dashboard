import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 30,
  fontWeight: 'bold',
}));
const StyledTex = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
    
  }));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <g transform={`translate(${left + width / 2},${top + height / 2})`}>
      {children}
    </g>
  );
}

const SimplePiechart = () => {
  const modifiedData = data.map(item => ({ value: item.value }));

  return (
    <PieChart series={[{ data: modifiedData, innerRadius: 60 }]} {...size}>
      <PieCenterLabel>
        <StyledText y={-5}>
          <tspan fontSize="20">65%</tspan>
        </StyledText>
        <StyledTex y={20}>
          <tspan fontSize="12">Total New </tspan>
        </StyledTex>
        <StyledTex y={32}>
          <tspan fontSize="12"> Customers</tspan>
        </StyledTex>
      </PieCenterLabel>
    </PieChart>
  );
};

export default SimplePiechart;
