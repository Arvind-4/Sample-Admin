const MoneyTable = () => {
  return (
    <div className='rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
      <h4 className='mb-6 text-xl font-semibold text-black dark:text-white'>
        Weights and Money Allocation
      </h4>
      <div className='flex flex-col'>
        <div className='grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5'>
          <div className='p-2.5 xl:p-5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Assets
            </h5>
          </div>
          <div className='p-2.5 text-center xl:p-5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Company Name
            </h5>
          </div>
          <div className='hidden p-2.5 text-center sm:block xl:p-5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Weight %
            </h5>
          </div>
          <div className='hidden p-2.5 text-center sm:block xl:p-5'>
            <h5 className='text-sm font-medium uppercase xsm:text-base'>
              Money
            </h5>
          </div>
        </div>
        <div className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5'>
          <div className='flex items-center gap-3 p-2.5 xl:p-5'>
            <p className='hidden text-black dark:text-white sm:block'>XDM</p>
          </div>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black dark:text-white'>
              Exom Mobile Corporation
            </p>
          </div>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-meta-3'>39005</p>
          </div>
          <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
            <p className='text-meta-5'>9090909</p>
          </div>
        </div>
        <div className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5'>
          <div className='flex items-center gap-3 p-2.5 xl:p-5'>
            <p className='hidden text-black dark:text-white sm:block'>XDM</p>
          </div>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black dark:text-white'>
              Exom Mobile Corporation
            </p>
          </div>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-meta-3'>39005</p>
          </div>
          <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
            <p className='text-meta-5'>9090909</p>
          </div>
        </div>
        <div className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5'>
          <div className='flex items-center gap-3 p-2.5 xl:p-5'>
            <p className='hidden text-black dark:text-white sm:block'>XDM</p>
          </div>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black dark:text-white'>
              Exom Mobile Corporation
            </p>
          </div>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-meta-3'>39005</p>
          </div>
          <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
            <p className='text-meta-5'>9090909</p>
          </div>
        </div>
        <div className='grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5'>
          <div className='flex items-center gap-3 p-2.5 xl:p-5'>
            <p className='hidden text-black dark:text-white sm:block'>XDM</p>
          </div>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-black dark:text-white'>
              Exom Mobile Corporation
            </p>
          </div>
          <div className='flex items-center justify-center p-2.5 xl:p-5'>
            <p className='text-meta-3'>39005</p>
          </div>
          <div className='hidden items-center justify-center p-2.5 sm:flex xl:p-5'>
            <p className='text-meta-5'>9090909</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyTable;
