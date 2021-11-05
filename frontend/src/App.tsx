import DonutChart from "components/DonutChart";
import BarChat from "components/BarChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "./components/NavBar/index";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Porcentagem de vendas</h5>
            <BarChat />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChart />
          </div>

          <div className="py-3">
            <h2 className="text-orimary">Todas Vendas</h2>
          </div>

        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
