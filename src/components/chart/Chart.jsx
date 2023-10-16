import {React} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import Piechart from './PieChart'; // Update the import to point to your actual file

const Charts = () => {
  const uData = [
    { name: 'JAN', uv: 4000 },
    { name: 'FEB', uv: 3000 },
    { name: 'MAR', uv: 2000 },
    { name: 'APR', uv: 2780 },
    { name: 'MAY', uv: 1890 },
    { name: 'JUN', uv: 2390 },
    { name: 'JUL', uv: 3490 },
    { name: 'AUG', uv: 5000 },
    { name: 'SEP', uv: 1500 },
    { name: 'OCT', uv: 2540 },
    { name: 'NOV', uv: 3470 },
    { name: 'DEC', uv: 4120 },
  ];
  const maxUV = Math.max(...uData.map((item) => item.uv));
 
  return (
    <section className="flex flex-wrap justify-between mt-10">
        <div className="sm:w-[17.8rem] md:w-full lg:w-3/4">
      <div className="h-full border shadow rounded-lg bg-white max-h-96">
        <div className="flex justify-between mt-8 px-8">
          <div>
            <h4 className="font-bold text-xl">Overview</h4>
            <span className="text-xs text-gray-400">Monthly Earning</span>
          </div>
          <div className="flex items-center">
            <select className="border rounded text-gray-400 bg-gray-100 border-none p-1 ml-0 sm:ml-2">
              <option value="">Quarterly</option>
              <option value="">Half yearly</option>
              <option value="">Annually</option>
            </select>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={uData} margin={{ top: 10, right: 30, left: 30, bottom: 20 }}>
            <XAxis dataKey="name" tick={{ dy: 10, fill: 'purple' }} axisLine={false} />
            <Tooltip />
            <Bar dataKey="uv" barSize={40} radius={[10, 10, 10, 10]}>
              {uData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.uv === maxUV ? '#6C23FD' : '#CFB9FB'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
      <div className="w-[17.8rem]">
        <div className="h-full w-full border shadow rounded-lg bg-white max-h-96">
          <div className='mt-5 px-5 '>
            <h4 className='font-bold text-xl'>Customers</h4>
            <span className='text-xs text-gray-400'>customers that buy products</span>
          </div>
          <div style={{ width: '100%', height: '100%', marginLeft:"-1rem", marginTop:"2rem"}}>
            <Piechart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
