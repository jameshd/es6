	const calendarPromise = fetch('https://gist.githubusercontent.com/planetoftheweb/f748ac9fac592d103529/raw/3764ab8fbbb374ef7213bca4261e089e67b3cbb6/data.json');

	const tweetPromise = fetch('https://gist.githubusercontent.com/hrp/900964/raw/2bbee4c296e6b54877b537144be89f19beff75f4/twitter.json');

	Promise.all([calendarPromise, tweetPromise])
		.then(responses => {
			return Promise.all(responses.map(res => res.json()));
		})
		.then(data => {
			console.log(data);
		})
