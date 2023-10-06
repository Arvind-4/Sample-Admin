import { useState } from 'react';
import Chart from '../components/Chart';
import Modal from '../components/Modal';
import CheckboxFive from '../components/Checkbox';
import DefaultLayout from '../layout/DefaultLayout';
import MoneyTable from '../components/tables/MoneyTable';
import VolumeTable from '../components/tables/VolumeTable';

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  return (
    <DefaultLayout>
      <div className='my-24 flex flex-col items-center '>
        <button
          onClick={() => setOpen(!open)}
          className='flex w-1/2 items-center justify-center gap-3.5 rounded-lg border border-stroke bg-stroke p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50'
        >
          Open Modal
        </button>
      </div>
      {open ? (
        <Modal>
          <div className='flex h-100 flex-col gap-2 overflow-y-scroll rounded-lg bg-white px-4 pb-4'>
            <h1 className='mt-2 pr-48 text-lg text-black'>Configurations</h1>
            <hr />
            <div className='flex flex-col gap-2'>
              <label>Investment</label>
              <input
                type='number'
                className='border-gray-200 rounded-lg border px-4 py-2'
                placeholder='1000'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Algorithm</label>
              <CheckboxFive />
              <CheckboxFive />
              <CheckboxFive />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Stock Market</label>
              <CheckboxFive />
            </div>
            <div className='flex flex-col gap-2'>
              <label>Start Date</label>
              <input
                type='date'
                className='custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label>End Date</label>
              <input
                type='date'
                className='custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Simulator Device</label>
              <CheckboxFive />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email'>Your Risk Factor</label>
              <input
                type='range'
                className='dark:bg-gray2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label>no of stocks to be selected in portfolio</label>
              <input
                type='number'
                className='border-gray-200 rounded-lg border px-4 py-2'
                placeholder='1000'
              />
            </div>
            <hr />
            <div className='flex flex-row gap-2'>
              <button
                onClick={() => setOpen(!open)}
                className='flex-1 rounded-full bg-danger px-4 py-2 text-lg font-bold text-white'
              >
                Close
              </button>
              <button
                onClick={() => setOpen(!open)}
                className='flex-1 rounded-full bg-success px-4 py-2 text-lg font-bold text-white'
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
      <h1 className='text-2xl font-bold text-black'>Portfolio Results</h1>
      <MoneyTable />
      <Chart />
      <VolumeTable />
    </DefaultLayout>
  );
};

export default Portfolio;
