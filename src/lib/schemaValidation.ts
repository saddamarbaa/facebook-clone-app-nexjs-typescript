import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.required('First name is required')
		.min(3, 'Must be at least 3 characters')
		.max(20, 'First name must not exceed 20 characters'),
	lastName: Yup.string()
		.required('Last name is required')
		.min(3, 'Must be at least 3 characters')
		.max(20, 'Last name must not exceed 20 characters'),
	email: Yup.string().required('Email is required').email('Email is invalid'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters')
		.max(40, 'Password must not exceed 40 characters'),
	confirmPassword: Yup.string()
		.required('Confirm Password is required')
		.oneOf([Yup.ref('password')], 'Confirm Password does not match'),
	// acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
})
