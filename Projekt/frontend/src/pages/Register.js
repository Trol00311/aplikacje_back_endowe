import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Register.css'

const initialState = {
	Name: '',
	Email: '',
	Contact: '',
}

const Register = () => {
	const [state, setState] = useState(initialState)

	const { Name, Email, Contact } = state

	const { id } = useParams()

	const addUser = async data => {
		const response = await axios.post('http://localhost:5000/addUser', data)
		if (response.status === 200) {
			window.confirm('User added succesfuly')
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (!Name || !Email || !Contact) {
			window.confirm('Please provide value into each input field')
		} else {
			if (!id) {
				addUser(state)
			}
			window.location.reload()
		}
	}

	const handleInputChange = e => {
		let { name, value } = e.target
		setState({ ...state, [name]: value })
	}

	return (
		<div className='container'>
			<div style={{ marginTop: '100px', width: '400px' }}>
				<form
					action=''
					style={{
						margin: 'auto',
						padding: '15px',
						maxWidth: '400px',
						alignContent: 'center',
					}}
					onSubmit={handleSubmit}>
					<label htmlFor='Name'>Login</label>
					<input
						id='Name'
						name='Name'
						placeholder='Wpisz Login'
						type='text'
						onChange={handleInputChange}
						value={Name}
					/>
					<label htmlFor='Email'>Hasło</label>
					<input
						id='Email'
						class='password'
						name='Email'
						placeholder='Wpisz Hasło'
						type='password'
						onChange={handleInputChange}
						value={Email}
					/>
					<label htmlFor='number'>Nr Telefonu</label>
					<input
						id='Contact'
						name='Contact'
						placeholder='Wpisz nrTel'
						type='number'
						onChange={handleInputChange}
						value={Contact}
					/>
					<input type='submit' value='Zarejestruj' />
				</form>
			</div>
		</div>
	)
}

export default Register
