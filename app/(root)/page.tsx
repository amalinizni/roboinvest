import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

// Example stock data
const stocks = [
    {
        $id: "1",
        stockName: "AAPL",
        closePrice: 150.00,
        difference: 2.00,
        differencePercentage: 1.35,
    },
    {
        $id: "2",
        stockName: "TSLA",
        closePrice: 700.00,
        difference: -5.00,
        differencePercentage: -0.71,
    },
    // Add more stocks as needed
];

const Home = () => {
    const loggedIn = { firstName: 'Amalin', lastName: 'Izni', email: 'amalinizni@gmail.com' };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Monitor and manage your trading portfolio efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalStocks={stocks.length} // Total number of stocks
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT ALARM
            </div>

            <RightSidebar 
                user={loggedIn}
                alarms={[]} // Pass alarms if any
                stocks={stocks} // Pass the complete stocks array
            />
        </section>
    );
}

export default Home;
