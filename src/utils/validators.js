import { object, string, ref } from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^[0-9]{10,15}$/

export const loginSchema = object({
	identity: string().required().test(
		'identity check',
		'Identity must be a valid email or mobile number',
		(value) => {
			return emailRegex.test(value) || mobileRegex.test(value)
		}),
	password: string().min(4).required(),
}).noUnknown()

export const registerSchema = object({
	firstName: string().required(),
	lastName: string().required(),
	identity: string().required().test(
		'identity check',
		'Identity must be a valid email or mobile number',
		(value) => {
			if (!value) { return true }
			return emailRegex.test(value) || mobileRegex.test(value)
		}
	),
	password: string().min(4).required(),
	confirmPassword: string().oneOf([ref("password")], `confirmPassword must match password`),
}).noUnknown()

