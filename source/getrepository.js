// Octokit.js
// https://github.com/octokit/core.js#readme

import { Octokit } from "octokit";
import { config } from "./config.js";

const mykey = config.MY_KEY;

const octokit = new Octokit({
  auth: mykey
});

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

//const files = result.data.map(contents => {title: contents.title})

console.log(result)

}

catch (error)
{

//console.log('Error! Status: ${error.status}. Message: ${error.response.data.message}')
console.log(error);

}