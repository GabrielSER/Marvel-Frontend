
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import Navbar from './navbar/Navbar'
import Home from '../home/Home'
import Footer from './footer/Footer'
import Characters from '../characters/Characters'

import clsx from 'clsx'
import { CharactersProvider } from '../../contexts/CharactersContext'
import Banner from './Banner'
import NotFound from '../not-found/NotFound'

const MainBody = () => {
  return (
    <CharactersProvider>
      <BrowserRouter>
        <div
          className={clsx(
            'flex flex-col',
            'w-full h-full',
            'overflow-x-hidden overflow-y-hidden'
          )}
        >
          <Navbar />
          <div
            className={clsx(
              'flex flex-col',
              'w-full h-full',
              'overflow-x-hidden overflow-y-auto'
            )}
          >
            <Banner />
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/characters' exact element={<Characters />} />
              <Route path='/not-found' exact element={<NotFound/>} />
              <Route
                path='*'
                element={<Navigate to='/not-found' replace={true} />}
              />
              {/*
            <Route path='/combat' exact element={<CombatMain />} />
            <Route path='/roleplay' exact element={<AboutUs />} />
            <Route path='/places' exact element={<Places />} />
            <Route path='/surprise' exact element={<Classes />} />
            <Route path='/objects' exact element={<Places />} />
            <Route path='/characters/:_id' exact element={<CharacterDetail />} />
            <Route path='/addpower' exact element={<AddPower />} />
          */}
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </CharactersProvider>
  )
}

export default MainBody