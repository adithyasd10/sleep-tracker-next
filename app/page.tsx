import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from '@/components/Guest';
import AddNewRecord from '@/components/AddNewRecord';

export default async function HomePage() {
  const user = await currentUser();
  if (!user){
    return  <Guest />;;
  }
  return (
    <main className='bg-[#000000] text-white font-sans min-h-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Column */}
        <div className='space-y-6'>
          <div className='bg-[#111827] p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6'>
            {/* User Image */}
            <img
              src={user.imageUrl}
              alt={`${user.firstName}&#39;s profile`}
              className='w-24 h-24 rounded-full border border-cyan-500 shadow-md'
            />

            {/* User Details */}
            <div className='flex-1'>
              <h2 className='text-2xl md:text-3xl font-bold text-white bg-clip-text text-transparent mb-2'>
                Welcome Back, {user.firstName} 👋
              </h2>
              <p className='text-gray-300 mb-4'>
                Here&#39;s a quick overview of your recent sleep activity. Stay
                on top of your data insights and manage your tasks efficiently!
              </p>
              <div className='space-y-2'>
                <p className='text-gray-300'>
                  <span className='font-semibold text-white'>Joined:</span>{' '}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <p className='text-gray-300'>
                  <span className='font-semibold text-white'>
                    Last Active:
                  </span>{' '}
                  {user.lastActiveAt
                    ? new Date(user.lastActiveAt).toLocaleString()
                    : 'N/A'}
                </p>
              </div>
            </div>
          </div>
          {/* Placeholder for AddSleepRecord */}
          <AddNewRecord />
        </div>

        {/* Right Column */}
        <div className='space-y-6'>
          {/* Placeholder for RecordStats, RecentRecord, and Insights */}
          
        </div>
      </div>
      {/* Placeholder for SleepHistory */}
      <div className='max-w-7xl mx-auto'>
       
      </div>
    </main>
    
  )
}
