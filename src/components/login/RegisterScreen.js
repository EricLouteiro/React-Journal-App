import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { removeError, setError } from '../../action/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginWithEmailPassword } from '../../action/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch()
    const { msgError } = useSelector( state => state.ui )
    const [formData, handleInputChange ] =  useForm({
        name: 'Eric',
        email: 'elouteiro@es.com',
        password: '123456',
        confirmPassword: '123456'
    });

    const { name, email, password, confirmPassword } = formData;

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if ( validForm() ) {
            dispatch( startLoginWithEmailPassword( email, password, name ))
        }
    }

    const validForm = () => {
        if( name.trim().length === 0 ){
            dispatch(setError('name is required'))
            return false
        } else if ( !validator.isEmail( email ) ){
            dispatch(setError('email is not valid'))
            return false
        }else if ( password !== confirmPassword || password.length < 5 ){
            dispatch(setError('password should be at least 6 character or match each other'))
            return false
        }

        dispatch( removeError() );
        return true
    }

    return (
    <>
        <h3
            className='auth__title'
        > Register </h3>
        <form onSubmit={ handleSubmit }>

            {
                ( msgError ) &&
                (
                    <div className='auth__alert-error'  > 
                        { msgError }
                    </div>
                )
            }
            
            <input
                type="text"
                placeholder='Name'
                name='name'
                className='auth__input'
                autoComplete='off'
                value={ name }
                onChange={ handleInputChange }
            />
            <input
                type="text"
                placeholder='Email'
                name='email'
                className='auth__input'
                autoComplete='off'
                value={ email }
                onChange={ handleInputChange }
            />
            <input 
                type="password"
                placeholder='Password'
                name='password'
                className='auth__input'
                value={ password }
                onChange={ handleInputChange }
            />
            <input
                type="password"
                placeholder='Confirm Password'
                name='confirmPassword'
                className='auth__input'
                autoComplete='off'
                value={ confirmPassword }
                onChange={ handleInputChange }
            />

            <button 
                type='submit'
                className='btn btn-primary btn-block mt-5 mb-5'
            >
                Register
            </button>
        </form>

        <Link 
            to='/auth/login'
            className='link'
        >
            Already created?
        </Link>
    </>
    )
}
