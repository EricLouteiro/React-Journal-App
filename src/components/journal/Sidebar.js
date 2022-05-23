
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink } from 'react-router-dom';
import { startLogOut } from '../../action/auth';
import { startNewNote } from '../../action/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

  const dispatch = useDispatch();
  const { name } = useSelector( state => state.auth )

  const handleLogout = () => {

    dispatch( startLogOut() )
  };

  const handleNewNote = () => {

    dispatch( startNewNote() )
  }

  return (
    <aside className='journal__sidebar'>
        <div className='journal__sidebar-navbar'>
            <h3 className='mt-5'>
                <i className='far fa-moon'></i>
                <span> {name} </span>
            </h3>

            <NavLink 
              to='/portfolio'
              className='btn mt-3'
            >
              Portfolio
            </NavLink>
            <button 
              className='btn'
              onClick={ handleLogout }
            >
              LogOut
            </button>
        </div>

        <div 
          className='journal__new-entry'
          onClick={ handleNewNote }
          >
            <i className='far fa-calendar-plus fa-5x'></i>
            <p> New Entry </p>
        </div>

        <JournalEntries />
        
    </aside>
  )
}
