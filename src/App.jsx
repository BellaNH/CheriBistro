import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PreviewPage from './pages/PreviewPage'

const RESTAURANT_SLUG = import.meta.env.VITE_RESTAURANT_SLUG || 'cheribistro'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PreviewPage slug={RESTAURANT_SLUG} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
