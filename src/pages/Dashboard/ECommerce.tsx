import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import DefaultLayout from '../../layout/DefaultLayout.tsx';

const ECommerce = () => {
  return (
    <DefaultLayout>
      <p className="text-gray-800 dark:text-gray-100 text-2xl font-semibold">
        Welcome to Quantum Portfolio Manager
      </p>

      <p className="text-gray-600 dark:text-gray-400 mt-1">
        <br />
        Get the quantum power to get optimal portfolio for your financial
        investments sometime it might take few more seconds to load the data,
        and to show you the optimal result, kindly wait for a minute.
        <br />
      </p>

      <p className="text-gray-800 dark:text-gray-100 text-2xl font-semibold">
        <br />
        <br />
        Steps to use our system
        <br />
        <br />
      </p>

      <p className="text-gray-600 dark:text-gray-400 mt-1">
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

      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}
    </DefaultLayout>
  );
};

export default ECommerce;
