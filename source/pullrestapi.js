// Octokit.js
// https://github.com/octokit/core.js#readme

import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: mykey;
})

await octokit.request('GET /repos/{owner}/{repo}/pulls', {
  owner: 'bidoofd',
  repo: 'SoftwareDesignAndConstruction',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})