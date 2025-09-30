import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { ApplicationProvider } from '@contexts/ApplicationContext'
import { UserProvider } from '@contexts/UserContext'
import { ToolbarProvider } from '@contexts/ToolbarContext'
import { DicesProvider } from '@contexts/DicesContext'
import { CharactersProvider } from '@contexts/CharactersContext'
import { FormsProvider } from '@contexts/FormsContext'
import { PowersProvider } from '@contexts/PowersContext'
import { ContentProvider } from '@contexts/ContentContext'
import { UserCharactersProvider } from '../../contexts/UserCharactersContext'
import Login from './Login'
import MainBody from './MainBody'

const Main = () => {
  return (
    <ApplicationProvider>
      <Router>
        <UserProvider>
          <Routes>
            <Route
              path='/login'
              exact
              element={<Login />}
            />
            <Route
              path='*'
              element={
                <ToolbarProvider>
                  <DicesProvider>
                    <CharactersProvider>
                      <FormsProvider>
                        <PowersProvider>
                          <ContentProvider>
                            <UserCharactersProvider>
                              <MainBody />
                            </UserCharactersProvider>
                          </ContentProvider>
                        </PowersProvider>
                      </FormsProvider>
                    </CharactersProvider>
                  </DicesProvider>
                </ToolbarProvider>
              }
            />
          </Routes>
        </UserProvider>
      </Router>
    </ApplicationProvider>
  )
}

export default Main
