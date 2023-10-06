import DefaultLayout from '../layout/DefaultLayout';

const ECommerce = () => {
  return (
    <DefaultLayout>
      <p className='text-gray-800 dark:text-gray-100 text-2xl font-semibold'>
        Welcome to Quantum Portfolio Manager
      </p>

      <p className='text-gray-600 dark:text-gray-400 mt-1'>
        <br />
        Get the quantum power to get optimal portfolio for your financial
        investments sometime it might take few more seconds to load the data,
        and to show you the optimal result, kindly wait for a minute.
        <br />
      </p>

      <p className='text-gray-800 dark:text-gray-100 text-2xl font-semibold'>
        <br />
        <br />
        Steps to use our system
        <br />
        <br />
      </p>

      <p className='text-gray-600 dark:text-gray-400 mt-1'>
        we load our data on per minute basis, so after every minute you can
        generate profit on every trade executed
        <br /> <br />
        1) Login to our system <br />
        2) select the stocks that you want <br />
        3) select the values for other inputs asked <br />
        4) click on the button to get you the results <br />
        5) read the output and execute the trade accoridngly <br />
        6) earn profit and make life happier <br />
      </p>
    </DefaultLayout>
  );
};

export default ECommerce;
