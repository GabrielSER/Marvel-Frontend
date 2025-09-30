import { Route, Navigate, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Character from '../characters/Character'
import Rules from '../characters/Rules'
import Characters from '../characters/Characters'
import CharacterDetail from '../character-detail/CharacterDetail'
import Places from '../places/Places'
import Combat from '../combat/Combat'
import Roleplay from '../roleplay/Roleplay'
import Objects from '../objects/Objects'
import NotFound from '../not-found/NotFound'
import Types from '../characters/Types'
import Villains from '../characters/Villains'
import MyCharacters from '../user-characters/MyCharacters'
import Sheet from '../user-characters/Sheet'

const MainBodyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/player'
        exact
        element={<Character />}
      />
      <Route
        path='/heroes'
        exact
        element={<Characters />}
      />
      <Route
        path='/villains'
        exact
        element={<Villains />}
      />
      <Route
        path='/types'
        exact
        element={<Types />}
      />
      <Route
        path='/characters/:characterNormalized/:formNormalized?'
        element={<CharacterDetail />}
      />
      <Route
        path='/places/*'
        element={<Places />}
      />
      <Route
        path='/rules/*'
        element={<Rules />}
      />
      <Route
        path='/combat/*'
        element={<Combat />}
      />
      <Route
        path='/roleplaying/*'
        element={<Roleplay />}
      />
      <Route
        path='/objects/*'
        element={<Objects />}
      />
      <Route
        path="/my-characters"
        element={<MyCharacters />}
      />
      <Route
        path="/my-characters/:id"
        element={<Sheet />}
      />
      <Route
        path='/'
        exact
        element={<Home />}
      />
      <Route
        path='/not-found'
        exact
        element={<NotFound />}
      />
      <Route
        path='*'
        element={
          <Navigate
            to='/not-found'
            replace={true}
          />
        }
      />
    </Routes>
  )
}

export default MainBodyRoutes
