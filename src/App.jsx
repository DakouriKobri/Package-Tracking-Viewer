import Header from "./components/Header";
import List from "./components/List";
import TrackingSummary from "./components/TrackingSummary"
import Footer from "./components/Footer";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <List /> */}
      <TrackingSummary />
      <Footer />
    </div>
  );
}
