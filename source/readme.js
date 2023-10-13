// Octokit.js
// https://github.com/octokit/core.js#readme

import { Octokit } from "octokit";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: mykey;
});

try
{

const readme = await octokit.request('GET /repos/{owner}/{repo}/readme', {
  owner: 'bidoofd',
  repo: 'SoftwareDesignAndConstruction',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

//const readmename = readme.data.map(readme => {title: readme.title})

console.log(readme)

//console.error(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)

}

catch (error)
{
	//console.error('Error! Status: ${error.status}. Message: ${error.response.data.message}\n\n')
	console.log(error);

//console.error(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)

}