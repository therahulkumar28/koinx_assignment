import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const Tokeniomics = () => {
  const pieChartData = [
    { name: 'Founder', value: 20 },
    { name: 'Crowdsale Investor', value: 80 },
   
  ];

  const COLORS = ['#FAA002', '#0082FF'];

  return (
    <div className="flex flex-col mt-8 bg-white p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tokeniomics</h2>
      <div className="text-xl font-semibold mt-4">Initial Distributions</div>
      <div className="flex  items-center">
      
        <PieChart width={300} height={300}>
          <Pie
            data={pieChartData}
            cx="35%" 
            cy="40%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
         
          >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <div className="">
         
          {pieChartData.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mb-2">
            <div
            className={`w-4 h-4 mr-2 rounded-full`}
            style={{ backgroundColor: `${COLORS[index % COLORS.length]}` }}
          ></div>
          
              <div>{entry.name}  : {entry.value }%</div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-left">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et justo ac libero pharetra dapibus. Integer eu nisl quis augue lobortis luctus id eget ipsum. Ut ac metus et ex varius lacinia non nec justo. Aenean feugiat orci auctor turpis convallis, non feugiat libero eleifend. Sed condimentum, nunc ut vestibulum suscipit, augue odio luctus tortor, vitae tincidunt arcu ligula vel odio. Praesent bibendum, velit a aliquam congue, libero sapien varius nisi, vel vol
      </div>
    </div>
  );
};

export default Tokeniomics;
