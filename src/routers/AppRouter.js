import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { login } from '../action/auth'
import { setNotes, startLoadingNotes } from '../action/notes'
import { JournalScreen } from '../components/journal/JournalScreen'
import { PortfolioScreen } from '../components/portfolio/PortfolioScreen'
import { auth } from '../firebase/firebase-config'
import { loadNotes } from '../helpers/loadNotes'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoutes'
import { PublicRoute } from './PublicRoutes'

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    
    onAuthStateChanged( auth, (user) =>{
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn( true );
        dispatch( startLoadingNotes( user.uid ));
      }
      else{
        setIsLoggedIn(false);
      }
      setChecking(false);
    })
  }, [ dispatch, setChecking, setIsLoggedIn ])

  console.log(isLoggedIn)
  
  if (checking) {
    return(
      <h1>
        Cargando...
      </h1>
    )
  }

  return (

    <BrowserRouter>
        <Routes>
            <Route path="/auth/*" element={ 
              <PublicRoute>
                 <AuthRouter />
               </PublicRoute> 
            }/> 

            <Route path="/" element={ 
              <PrivateRoute >
                <JournalScreen />
              </PrivateRoute>
            }/>
            <Route path='/portfolio' element={
              <PrivateRoute>
                <PortfolioScreen /> 
              </PrivateRoute>
            }
            />
        </Routes>
    </BrowserRouter>
  )
}

