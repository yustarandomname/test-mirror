import ghpages from 'gh-pages';

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/yustarandomname/test-mirror.git', // Update to point to your repository
		user: {
			name: 'yustarandomname', // update to use your name
			email: 'abeldebruijn@hotmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
