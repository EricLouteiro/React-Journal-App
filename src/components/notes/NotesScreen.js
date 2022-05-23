
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../action/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
  
  const dispatch = useDispatch();
  const { active:note } = useSelector(state => state.notes );

  const [formValues, handleInputChange, reset ] = useForm( note );
  const { title, body } = formValues;

  const activeId = useRef( note.id );

  useEffect(() => {
    
    if( note.id !== activeId.current ){
        reset( note );
        activeId.current = note.id
    }
  
  }, [ note, reset ])

  useEffect(() => {

    dispatch( activeNote(formValues.id, { ...formValues }))
      
  }, [formValues, dispatch ])
  
  

    
  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className='notes__content'>
            <input 
                className='notes__title-input'
                placeholder='Some Title'
                type='text'
                name='title'
                value={ title }
                onChange={ handleInputChange }
            />

            <textarea 
                placeholder='Write something!'
                className='notes__textarea'
                value={ body }
                name='body'
                onChange={ handleInputChange }
            ></textarea>

            {   (note.url) &&
                <div className='notes__image'>
                    <img 
                        src='https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg'
                        alt='image'
                    />
                </div>
            }
        </div>
    </div>
  )
}
