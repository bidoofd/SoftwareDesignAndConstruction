// Octokit.js
// https://github.com/octokit/core.js#readme

import { Octokit } from "octokit";

const octokit = new Octokit({
  		auth: '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'
		});

async function getRepo()
{
	try
	{
    	const result = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        	owner: 'bidoofd',
        	repo: 'SoftwareDesignAndConstruction',
        	path: '',
        	headers: {
            	'X-GitHub-Api-Version': '2022-11-28'
        	}
		});

		if(!result.ok)
		{
			throw new Error(`Error! status: ${result.status}`);
    	}
    
    	const data = await result.json();
    	return data;

	}
	catch (err)
	{
		console.log(err);
	}
}

console.log(await getRepo());
