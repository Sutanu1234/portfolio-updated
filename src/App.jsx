
import Footer from "./components/pages/footer/Footer"
import Home from "./components/pages/home/Home"
import ToggleManue from "./components/pages/main/ToggleManue"
import Top from "./components/pages/top/Top"
import { Separator } from "./components/ui/separator"

function App() {

  return (
    <>
      <Top />
      <div className="flex items-center justify-center">
        <Separator height="2px" width="96%" className="bg-gray-300 " />
      </div>
      <Home />
      <div className="flex justify-center">
        <Separator height="2px" width="96%" className="bg-gray-300 " />
      </div>
      <div className="flex justify-center mt-12">
        <Separator height="2px" width="96%" className="bg-gray-300 " />
      </div>
      <ToggleManue />
      <div className="flex justify-center">
        <Separator height="2px" width="96%" className="bg-gray-300 " />
      </div>
      <div className="flex justify-center mt-12">
        <Separator height="2px" width="96%" className="bg-gray-300 " />
      </div>
      <Footer />
    </>
  )
}

export default App
