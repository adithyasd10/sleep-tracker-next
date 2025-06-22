import getRecords from '@/app/actions/getRecords';
import BarChart from './BarChart'; // Ensure BarChart.tsx or BarChart.jsx exists in the same directory

const RecordChart = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className='bg-red-100 text-red-800 border border-red-300 rounded-md p-4 text-center'>
        <p>{error}</p>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className='bg-[#1f2937] flex items-center justify-center  '>
        <div className='bg-[#1f2937] shadow-lg rounded-2xl p-8 w-full text-center'>
          <h3 className='bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent font-bold text-xl'>
            No Sleep Records Found
          </h3>
          <p className='text-gray-400'>
            Start tracking your sleep to see your records here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-[#000000] flex items-center justify-center'>
      <div className='bg-[#111827] shadow-lg rounded-2xl p-8 w-full'>
        <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent'>
          Sleep Records Chart
        </h3>
        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />{' '}
        {/* Pass records as props */}
      </div>
    </div>
  );
};

export default RecordChart;
