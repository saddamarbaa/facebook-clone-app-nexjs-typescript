export interface AuthResponseType {
	email: string
	displayName?: string
	uid: string
	photoURL?: string
}

export interface AuthLoginRequestType {
	email: string
	password: string
}

export interface AutRestPasswordRequestType {
	email: string
	password: string
}

export interface AuthRequestType extends AuthLoginRequestType {
	name: string
	confirmPassword: string
	imageUrl?: string
}

export interface TimestampT {
	seconds: number
	nanoseconds: number
}

export interface CommentT {
	text: string
	user: AuthResponseType
	timestamp: TimestampT
}
