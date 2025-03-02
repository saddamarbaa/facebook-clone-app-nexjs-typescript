'use client'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@/components/ui/button'
import { validationSchema } from '@/lib/schemaValidation'
import Link from 'next/link'

const SignInPageComponent: React.FC = () => {
	const {
		register,
		handleSubmit,
		// reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	})

	const onSubmit = (data: unknown) => {
		console.log(data)
	}

	const signInWithGoogleHandler = (event: React.SyntheticEvent) => {
		event.preventDefault()
		// Add your Google sign-in logic here
	}

	const signInWithFacebookHandler = (event: React.SyntheticEvent) => {
		event.preventDefault()
		// Add your Facebook sign-in logic here
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen w-full max-w-7xl mx-auto overflow-hidden pb-12">
			<div className="w-97 mt-4 max-w-md min-w-md w-full">
				<div className="relative w-60 h-24 mx-auto cursor-pointer">
					<Image
						src="/images/logo-2.svg"
						alt="FaceBook Logo"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="min-h-96 w-full rounded-lg bg-white shadow-md text-gray-800">
					<section className="pt-0 pb-8">
						<div className="py-2 border-b border-gray-300 text-center">
							<h1 className="text-2xl text-gray-900 mb-2">
								Sign in to your account
							</h1>
							<p className="text-gray-600 text-sm">Welcome back!</p>
						</div>
						<form className="p-8" onSubmit={handleSubmit(onSubmit)}>
							<div className="mt-4">
								{errors.email && (
									<p className="text-red-500 text-sm">{errors.email.message}</p>
								)}
								<input
									type="text"
									id="email"
									className={`w-full p-2 border rounded ${
										errors.email
											? 'border-red-500 bg-red-100'
											: 'border-gray-300'
									}`}
									placeholder={errors.email ? '' : 'Email'}
									{...register('email')}
								/>
							</div>
							<div className="mt-4">
								{errors.password && (
									<p className="text-red-500 text-sm">
										{errors.password.message}
									</p>
								)}
								<input
									type="password"
									id="password"
									className={`w-full p-2 border rounded ${
										errors.password
											? 'border-red-500 bg-red-100'
											: 'border-gray-300'
									}`}
									placeholder={errors.password ? '' : 'Password'}
									{...register('password')}
								/>
							</div>

							<div className="mt-4 flex items-center">
								<input
									type="checkbox"
									id="rememberMe"
									// {...register('rememberMe')}
									className="mr-2"
								/>
								<label htmlFor="rememberMe" className="text-sm text-gray-600">
									Remember me
								</label>
							</div>

							<Button className="w-full bg-blue-600 text-white py-2 rounded mt-6 hover:bg-blue-700 text-base">
								Sign In
							</Button>
						</form>
						<div className="px-8">
							<Button
								onClick={signInWithGoogleHandler}
								className="w-full flex items-center justify-center bg-white border border-blue-600 text-blue-600 py-2 rounded  hover:bg-blue-50 text-base">
								<Image
									src="/images/google.png"
									alt="Google Logo"
									width={25}
									height={25}
								/>
								<span className="ml-2">Sign with Google</span>
							</Button>
						</div>

						{/* Facebook Sign In Button */}
						<div className="px-8 mt-6">
							<Button
								onClick={signInWithFacebookHandler}
								className="w-full flex items-center justify-center bg-white border border-blue-600 text-blue-600 py-2 rounded  hover:bg-blue-50 text-base">
								<Image
									src="/images/black-facebook-logo-vector-clipart.png"
									alt="Google Logo"
									className="rounded-full"
									width={25}
									height={25}
								/>
								<span className="ml-2">Sign in with Facebook</span>
							</Button>
						</div>
						<p className="text-center border-b border-gray-300 my-6 text-sm font-bold">
							Or
						</p>
						<div className="px-8 w-full flex items-center justify-center ">
							<Link href={'/sign-up'}>
								<Button className=" bg-green-600 text-white py-2 rounded hover:bg-green-700 mx-auto text-base">
									Don’t have an account? Sign up
								</Button>
							</Link>
						</div>
					</section>
				</div>
				<div className="text-center text-sm text-gray-600 mt-4">
					<span className="text-blue-600 cursor-pointer hover:underline">
						Conditions of Use
					</span>{' '}
					<span className="text-blue-600 cursor-pointer hover:underline">
						Privacy Notice
					</span>{' '}
					<span className="text-blue-600 cursor-pointer hover:underline">
						Help
					</span>
				</div>
				<div className="text-center text-sm text-gray-600">
					&copy; 2004-2027, Facebook.com, Inc. or its affiliates
				</div>
			</div>
		</div>
	)
}

export default SignInPageComponent
