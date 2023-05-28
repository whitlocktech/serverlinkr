import { Routes, Route } from 'react-router-dom'
import { ApiProvider } from './contexts/api.context'
import './App.css'

import Home from './routes/home/home.component'
import LinksContainer from './routes/linksContainer/linksContainer.component'

function App() {
  return (
    <ApiProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<LinksContainer />} />
        </Route>
      </Routes>
    </ApiProvider>
  );
}

export default App;
