import {create} from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { authApi } from '../api/authApi'

const useUserStore = create( persist((set,get) => ({
	user: null,
	token : '',
	login : async (input)=>{
		const rs = await authApi.post('/login',input )
		set({token : rs.data.token, user: rs.data.user})
		return rs
	},
	logout: () => set({token : '', user: null})
}), {
	name: 'authState',
	storage: createJSONStorage( ()=> localStorage )
}))

export default useUserStore