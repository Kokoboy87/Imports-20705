import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3001/api'
})

export const getProducts = async () => {
	const response = await api.get('/products/olive-oil')
	return response.data
}
