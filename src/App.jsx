import Content from "./Content"
import MyInfo from "./MyInfo"


function App() {
  

  return (
    <div className="whole flex items-start lg:items-center h-screen ">
      <div className="font-popins w-full flex-col py-10 lg:my-10 lg:max-h-[48rem] lg:flex-row px-7 gap-7 flex justify-center items-center text-[#e3e3e3]">
        <MyInfo />
        <Content />
      </div>
    </div>
  )
}

export default App
