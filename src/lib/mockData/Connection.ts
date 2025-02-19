type ConnectionStatus = 'Connected' | 'Pending' | 'Invited'

export type ConnectionT = {
	id: number
	name: string
	title: string
	company: string
	location: string
	profilePicUrl: string
	status: ConnectionStatus
}

export const mockedConnections: ConnectionT[] = [
	{
		id: 1,
		name: 'John Doe',
		title: 'Software Engineer',
		company: 'Google',
		location: 'Remote',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
		status: 'Connected',
	},
	{
		id: 2,
		name: 'Jane Smith',
		title: 'Product Manager',
		company: 'Amazon',
		location: 'Seattle, WA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
		status: 'Pending',
	},
	{
		id: 3,
		name: 'Michael Johnson',
		title: 'Data Scientist',
		company: 'Facebook',
		location: 'Menlo Park, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
		status: 'Invited',
	},
	{
		id: 4,
		name: 'Alice Williams',
		title: 'UX Designer',
		company: 'Apple',
		location: 'Cupertino, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
		status: 'Connected',
	},
	{
		id: 5,
		name: 'David Brown',
		title: 'Software Engineer',
		company: 'Microsoft',
		location: 'Redmond, WA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
		status: 'Pending',
	},
	{
		id: 6,
		name: 'Emily Davis',
		title: 'Product Designer',
		company: 'Spotify',
		location: 'New York, NY',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
		status: 'Invited',
	},
	{
		id: 7,
		name: 'Chris Harris',
		title: 'Front-end Developer',
		company: 'Tesla',
		location: 'Palo Alto, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
		status: 'Connected',
	},
	{
		id: 8,
		name: 'Sarah Wilson',
		title: 'Back-end Developer',
		company: 'Netflix',
		location: 'Los Gatos, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
		status: 'Pending',
	},
	{
		id: 9,
		name: 'Matthew Thomas',
		title: 'Software Engineer',
		company: 'GitHub',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
		status: 'Invited',
	},
	{
		id: 10,
		name: 'Olivia Martinez',
		title: 'Machine Learning Engineer',
		company: 'Snapchat',
		location: 'Santa Monica, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
		status: 'Connected',
	},
	{
		id: 11,
		name: 'Lucas Lee',
		title: 'DevOps Engineer',
		company: 'Airbnb',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
		status: 'Pending',
	},
	{
		id: 12,
		name: 'Sophie White',
		title: 'Data Analyst',
		company: 'Uber',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
		status: 'Invited',
	},
	{
		id: 13,
		name: 'Ethan Green',
		title: 'Full Stack Developer',
		company: 'LinkedIn',
		location: 'Sunnyvale, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
		status: 'Connected',
	},
	{
		id: 14,
		name: 'Sophia Harris',
		title: 'Frontend Developer',
		company: 'Dropbox',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
		status: 'Pending',
	},
	{
		id: 15,
		name: 'James Walker',
		title: 'Software Engineer',
		company: 'Twitter',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
		status: 'Invited',
	},
	{
		id: 16,
		name: 'Mia Robinson',
		title: 'Product Manager',
		company: 'Pinterest',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
		status: 'Connected',
	},
	{
		id: 17,
		name: 'Benjamin King',
		title: 'Data Engineer',
		company: 'Oracle',
		location: 'Redwood City, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
		status: 'Pending',
	},
	{
		id: 18,
		name: 'Isabella Scott',
		title: 'Data Scientist',
		company: 'Salesforce',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
		status: 'Invited',
	},
	{
		id: 19,
		name: 'Daniel Hall',
		title: 'Software Engineer',
		company: 'Zoom',
		location: 'San Jose, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/19.jpg',
		status: 'Connected',
	},
	{
		id: 20,
		name: 'Charlotte Adams',
		title: 'Frontend Developer',
		company: 'Adobe',
		location: 'San Jose, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/20.jpg',
		status: 'Pending',
	},
	{
		id: 21,
		name: 'Henry Carter',
		title: 'Backend Developer',
		company: 'Squarespace',
		location: 'New York, NY',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
		status: 'Invited',
	},
	{
		id: 22,
		name: 'Grace Perez',
		title: 'Product Designer',
		company: 'Slack',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
		status: 'Connected',
	},
	{
		id: 23,
		name: 'Liam Thomas',
		title: 'Cloud Engineer',
		company: 'Salesforce',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/23.jpg',
		status: 'Pending',
	},
	{
		id: 24,
		name: 'Zoe Walker',
		title: 'Software Engineer',
		company: 'Spotify',
		location: 'New York, NY',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/24.jpg',
		status: 'Invited',
	},
	{
		id: 25,
		name: 'Jack Young',
		title: 'Security Engineer',
		company: 'GitHub',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
		status: 'Connected',
	},
	{
		id: 26,
		name: 'Ava King',
		title: 'Mobile Developer',
		company: 'Microsoft',
		location: 'Redmond, WA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/26.jpg',
		status: 'Pending',
	},
	{
		id: 27,
		name: 'Evan Lee',
		title: 'Site Reliability Engineer',
		company: 'Google',
		location: 'Mountain View, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/27.jpg',
		status: 'Invited',
	},
	{
		id: 28,
		name: 'Chloe Perez',
		title: 'Product Designer',
		company: 'Facebook',
		location: 'Menlo Park, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/28.jpg',
		status: 'Connected',
	},
	{
		id: 29,
		name: 'Sebastian Evans',
		title: 'Full Stack Developer',
		company: 'Stripe',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/29.jpg',
		status: 'Pending',
	},
	{
		id: 30,
		name: 'Amelia Clark',
		title: 'UI/UX Designer',
		company: 'Netflix',
		location: 'Los Gatos, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/30.jpg',
		status: 'Invited',
	},
	{
		id: 31,
		name: 'Isaac Moore',
		title: 'Machine Learning Engineer',
		company: 'Tesla',
		location: 'Palo Alto, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/31.jpg',
		status: 'Connected',
	},
	{
		id: 32,
		name: 'Madeline Davis',
		title: 'Frontend Developer',
		company: 'Twitter',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/32.jpg',
		status: 'Pending',
	},
	{
		id: 33,
		name: 'Owen White',
		title: 'Backend Developer',
		company: 'LinkedIn',
		location: 'Sunnyvale, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/33.jpg',
		status: 'Invited',
	},
	{
		id: 34,
		name: 'Lily Taylor',
		title: 'Product Manager',
		company: 'Slack',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/34.jpg',
		status: 'Connected',
	},
	{
		id: 35,
		name: 'Alexander Scott',
		title: 'Cloud Engineer',
		company: 'Amazon',
		location: 'Seattle, WA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/35.jpg',
		status: 'Pending',
	},
	{
		id: 36,
		name: 'Charlotte Harris',
		title: 'Product Designer',
		company: 'Uber',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/36.jpg',
		status: 'Invited',
	},
	{
		id: 37,
		name: 'George Moore',
		title: 'Full Stack Developer',
		company: 'Square',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
		status: 'Connected',
	},
	{
		id: 38,
		name: 'Ella Walker',
		title: 'Product Manager',
		company: 'Pinterest',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/38.jpg',
		status: 'Pending',
	},
	{
		id: 39,
		name: 'Max Wilson',
		title: 'Backend Developer',
		company: 'Apple',
		location: 'Cupertino, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/39.jpg',
		status: 'Invited',
	},
	{
		id: 40,
		name: 'Sophia Harris',
		title: 'Product Designer',
		company: 'Dropbox',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/40.jpg',
		status: 'Connected',
	},
	{
		id: 41,
		name: 'Elijah Young',
		title: 'Cloud Engineer',
		company: 'Salesforce',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/41.jpg',
		status: 'Pending',
	},
	{
		id: 42,
		name: 'Zara King',
		title: 'Software Engineer',
		company: 'GitHub',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/42.jpg',
		status: 'Invited',
	},
	{
		id: 43,
		name: 'Ella Green',
		title: 'Data Scientist',
		company: 'Airbnb',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/43.jpg',
		status: 'Connected',
	},
	{
		id: 44,
		name: 'Wyatt Brown',
		title: 'Machine Learning Engineer',
		company: 'Facebook',
		location: 'Menlo Park, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
		status: 'Pending',
	},
	{
		id: 45,
		name: 'Lily Smith',
		title: 'Full Stack Developer',
		company: 'Stripe',
		location: 'San Francisco, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
		status: 'Invited',
	},
	{
		id: 46,
		name: 'Charlie White',
		title: 'Product Designer',
		company: 'Spotify',
		location: 'New York, NY',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
		status: 'Connected',
	},
	{
		id: 47,
		name: 'Scarlett Lee',
		title: 'Software Engineer',
		company: 'Netflix',
		location: 'Los Gatos, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/47.jpg',
		status: 'Pending',
	},
	{
		id: 48,
		name: 'Oliver Martinez',
		title: 'Cloud Engineer',
		company: 'Amazon',
		location: 'Seattle, WA',
		profilePicUrl: 'https://randomuser.me/api/portraits/men/48.jpg',
		status: 'Invited',
	},
	{
		id: 49,
		name: 'Avery Johnson',
		title: 'Frontend Developer',
		company: 'Adobe',
		location: 'San Jose, CA',
		profilePicUrl: 'https://randomuser.me/api/portraits/women/49.jpg',
		status: 'Connected',
	},
]
