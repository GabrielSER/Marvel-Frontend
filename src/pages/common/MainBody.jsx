
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
import Toolbar from './Toolbar'
import { UserProvider } from '../../contexts/UserContext'
import Places from '../places/Places'
import Character from '../characters/Character'
import Rules from '../characters/Rules'

const MainBody = () => {
  return (
    <UserProvider>
    <CharactersProvider>
      <FormsProvider>
      <PowersProvider>
        <ContentProvider>
          <BrowserRouter>
            <div
              className={clsx(
                'relative',
                'flex flex-col flex-initial',
                'w-full h-full',
                'overflow-x-hidden overflow-y-hidden',
                'font-comic',
                'bg-local'
              )}
              style={{
                backgroundImage: `url(https://i.ibb.co/Jqr4f35/backgound.png)`,
                backgroundRepeat: 'repeat'
              }}
            >
              <Navbar />
              <div
                className={clsx(
                  'flex flex-col',
                  'w-full h-full shrink-0 grow-0',
                  'overflow-x-hidden overflow-y-hidden'
                )}
              >
                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/player' exact element={<Character />} />
                  <Route path='/characters' exact element={<Characters />} />
                  <Route path='/characters/:normalized' exact element={<CharacterDetail />} />
                  <Route path='/places' exact element={<Places />} />
                  <Route path='/rules' exact element={<Rules />} />
                  <Route path='/combat' exact element={<Combat />} />
                  <Route path='/roleplaying' exact element={<Roleplay />} />
                  <Route path='/objects' exact element={<Objects />} />
                  <Route path='/not-found' exact element={<NotFound />} />
                  <Route
                    path='*'
                    element={<Navigate to='/not-found' replace={true} />}
                  />
                </Routes>
                <Footer />
              </div>
              <Toolbar/>
            </div>
          </BrowserRouter>
        </ContentProvider>
      </PowersProvider>
      </FormsProvider>
    </CharactersProvider>
    </UserProvider>
  )
}

export default MainBody