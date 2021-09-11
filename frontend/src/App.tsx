import DataTable from "../src/components/DataTable";
import Footer from "../src/components/Footer";
import NavBar from "../src/components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
