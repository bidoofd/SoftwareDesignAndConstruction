// Octokit.js
// https://github.com/octokit/core.js#readme

import { Octokit } from "octokit";
import fs from 'fs';
import path from 'path';

const octokit = new Octokit({
  auth: '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'
});

try
{

    const result = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'bidoofd',
        repo: 'SoftwareDesignAndConstruction',
        path: '',
        mediaType: 'raw',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        },
});

//console.log(result)


if(result.status === 200)
{
    //const contentString = result.toString('utf-8');
    const dataToSave = [];
    for(const item of result.data)
    {
        const rowData = {
            name: item.name,
            path: item.path,
            sha: item.sha,
            size: item.size,
            url: item.url,
            html_url: item.html_url,
            git_url: item.git_url,
            download_url: item.download_url,
            type: item.type,
            _links: item._links
        };
        
        dataToSave.push(rowData);
        
    }
    
    //console.log(dataToSave);
    
    const currentDirectory = path.resolve();
    //console.log(currentDirectory);
    const csvFilePath = `${currentDirectory}/ExportedCSV/output.csv`;
    
    const csvContent = dataToCSV(dataToSave);
    fs.writeFileSync(csvFilePath, csvContent);
    console.log(`CSV file created successfully: ${csvFilePath}`);
}
else
{
    console.log('failed to retreive file');
}

//const files = result.data.map(contents => {title: contents.title})

//const content = Buffer.from(result.content, 'base64').toString('utf-8');

//console.log(result)

}

catch (error)
{

//console.log('Error! Status: ${error.status}. Message: ${error.response.data.message}')
console.log(error);

}

function dataToCSV(data) {
  const header = Object.keys(data[0]).join(',');
  const rows = data.map((item) => Object.values(item).join(','));
  return [header, ...rows].join('\n');
}