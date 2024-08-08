import { useState } from 'react'
import CreateList from './components/CreateList';
import { Route, Routes } from 'react-router-dom';
import AllLists from './components/AllLists';
import ShowList from './components/ShowList';
import RouterOutlet from './layout/RouterOutlet';
import Header from './components/Header';

export interface List {
  name: string
  id: string
  createdAt: Date
  items: Item[]
}

export interface Item {
  name: string
  price?: number
  isPurchased?: boolean
}

function App() {

  const [lists, setLists] = useState<List[]>([])

  return (
    <>
      <Header>
        <CreateList setLists={setLists} />
      </Header>

      {!!lists.length && (
        <main>
          <Routes>
            <Route path="/" element={<RouterOutlet />}>
              <Route index element={<AllLists lists={lists}/>} />
              <Route path="list/:id" element={<ShowList />} />
            </Route>
          </Routes>
        </main>
      )}

    </>
  )
}

export default App
