
function App() {
  return (
    <>
    <div className="App flex flex-col justify-center items-center m-1 h-screen space-y-5">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => console.log("OK WORKING")}>
        Click me!
      </button>
    </div>
    </>
  )
}

export default App
