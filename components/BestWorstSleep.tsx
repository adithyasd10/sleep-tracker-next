import getBestWorstSleep from '@/app/actions/getBestWorstSleep';

const BestWorstSleep = async () => {
  const { bestSleep, worstSleep } = await getBestWorstSleep();

  return (
    <div className='bg-[#000000] flex items-center justify-center'>
      <div className='bg-[#111827] shadow-lg border border-teal-500 rounded-2xl p-8 w-full'>
        <h3 className='text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent'>
          Best and Worst Sleep
        </h3>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-6 sm:space-y-0'>
          {/* Best Sleep */}
          <div className='text-center'>
            <h4 className='text-lg font-medium text-gray-400 mb-2'>
              Best Sleep
            </h4>
            <p className='text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent'>
              {bestSleep !== undefined
                ? `${bestSleep} hours`
                : 'No data available'}
            </p>
          </div>

          {/* Divider */}
          <div className='hidden sm:block h-16 w-px bg-gray-600'></div>

          {/* Worst Sleep */}
          <div className='text-center'>
            <h4 className='text-lg font-medium text-gray-400 mb-2'>
              Worst Sleep
            </h4>
            <p className='text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent'>
              {worstSleep !== undefined
                ? `${worstSleep} hours`
                : 'No data available'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestWorstSleep;
