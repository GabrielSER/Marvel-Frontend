
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
import { ContentProvider } from '../../contexts/ContentContext'

import NotFound from '../not-found/NotFound'
import CharacterDetail from '../character-detail/CharacterDetail'
import { PowersProvider } from '../../contexts/PowersContext'
import Combat from '../combat/Combat'
import Roleplay from '../roleplay/Roleplay'
import Objects from '../objects/Objects'
import { FormsProvider } from '../../contexts/FormsContext'

const MainBody = () => {
  return (
    <CharactersProvider>
      <FormsProvider>
      <PowersProvider>
        <ContentProvider>
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
                  'w-full h-full shrink-0',
                  'overflow-x-hidden overflow-y-auto'
                )}
              >

                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/characters' exact element={<Characters />} />
                  <Route path='/combat' exact element={<Combat />} />
                  <Route path='/roleplaying' exact element={<Roleplay />} />
                  <Route path='/objects' exact element={<Objects />} />
                  <Route path='/characters/:normalized' exact element={<CharacterDetail />} />
                  <Route path='/not-found' exact element={<NotFound />} />
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
        </ContentProvider>
      </PowersProvider>
      </FormsProvider>
    </CharactersProvider>
  )
}

export default MainBody