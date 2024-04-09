import React from "react"
import EventTable from "./components/EventTable"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Routes from './routes/routes';

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* <Routes /> */}
      <EventTable />
      <Footer />
    </>
  )
}

export default App
