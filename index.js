console.log('Before');

const p = getUser(1);
p.then(user => getRepositories(user.gitHubUsername))
 .then(repos => getCommits(repos[0]))
 .then(commits => console.log('Commits', commits))
 .catch(err => console.log('Error', err.message));

console.log('After');

// function displayCommits (commits) {
//   console.log(commits);
// }

// function getCommits (repos) {
//   getCommits(repo, displayCommits);
// }

// function getRepositories (user) {
//   getRepositories(user.gitHubUsername, getCommits);
// }

function getUser(id) {
  return new Promise ( (resolve, reject) => {
    setTimeout(() => {
      console.log('reading from a database...');
      resolve( { id: id, gitHubUsername: 'manoj'});
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log('reading from a github...');
      resolve ( ['repo1', 'repo2', 'repo3']);
    }, 2000);
  })
}

function getCommits(repo) {
  return new Promise ((resolve, reject) => {
    setTimeout ( () => {
      console.log('Calling from Github Api...');
      resolve(['commits']);
    }, 2000);
  });
}

