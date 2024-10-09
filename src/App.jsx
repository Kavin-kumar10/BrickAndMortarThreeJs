import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import First from './Pages/First'
import { Suspense } from 'react'
import Second from './Pages/Second'

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<p>Loading ....</p>}>
          <Routes>
            <Route path='/First' element={<First/>}/>
            <Route path='/Second' element={<Second/>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App


{/* <Canvas className='h-full w-full'>
<mesh className="h-full w-full">
  <sphereGeometry args={[4, 20, 40]} />
  <meshLambertMaterial />
</mesh>
<ambientLight intensity={0.5} />
<directionalLight position={[0, 10, 5]} color="red" />
</Canvas> */}