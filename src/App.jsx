import Header from "./components/Header";
import PackagesList from "./components/PackagesList";
import Footer from "./components/Footer";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <PackagesList />
      <Footer />
    </div>
  );
}
