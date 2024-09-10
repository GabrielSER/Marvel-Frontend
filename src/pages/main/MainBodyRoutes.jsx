import { Route, Navigate, Routes } from 'react-router-dom'
import HomeComponent from '../home/HomeComponent'
import Character from '../characters/Character'
import Characters from '../characters/Characters'
import CharacterDetail from '../character-detail/CharacterDetail'
import Places from '../places/Places'
import Rules from '../characters/Rules'
import Combat from '../combat/Combat'
import Roleplay from '../roleplay/Roleplay'
import Objects from '../objects/Objects'
import NotFound from '../not-found/NotFound'

const MainBodyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/*'
        exact
        element={<HomeComponent />}
      />
      <Route
        path='/player'
        exact
        element={<Character />}
      />
      <Route
        path='/characters'
        exact
        element={<Characters />}
      />
      <Route
        path='/characters/:normalized'
        exact
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
