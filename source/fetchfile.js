import { Octokit } from "octokit";

const octokit = new Octokit({
    auth: mykey;
});

let fileSHA, fileBlob, fileContent, file

const getFileSHA = async () => {
  try {
    const response = await octokit.request('GET /repos/{owner}/{repo}/readme', {
  owner: 'bidoofd',
  repo: 'SoftwareDesignAndConstruction',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});
     const data = await response.json();
    // console.log(data);
    
    fileSHA = data[1].sha
    console.log(fileSHA);

  } catch (error) {
    console.log(error);
  }
  
  getFileBlob()
}

const getFileBlob = async (fileSHA)=> {
  try {
  const response = await octokit.request('GET /repos/{owner}/{repo}/readme', {
  owner: 'bidoofd',
  repo: 'SoftwareDesignAndConstruction',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});
  const data = await response.json();
    
  const fileBlob = data.content
  convertBlob(fileBlob)
  } catch (error) {
    console.log(error);
  }
}

const convertBlob = async blob => {
  // console.log(blob)
  try {
    
    // const fileContents = Buffer.from(blob, "base64").toString()
    // file = JSON.parse(fileContents)
    // file = JSON.parse(fileContents)
  
    const fileContents = base64EncodeUnicode(blob)
    file = JSON.parse(fileContents)
    console.log(file)
    
  } catch(error) {
    console.log(error)
  }
}

function base64EncodeUnicode(str) {
  const utf8Bytes = decodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  });

  return atob(utf8Bytes);
}


getFileSHA()