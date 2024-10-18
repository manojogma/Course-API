console.log('Before');
 getUser(1, getRepositories);
console.log('After');

function displayCommits (commits) {
  console.log(commits);
}

function getCommits (repos) {
  getCommits(repo, displayCommits);
}

function getRepositories (user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log('reading from a database...');
    callback( { id: id, gitHubUsername: 'manoj'});
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('reading from a github...');
    callback ( ['repo1', 'repo2', 'repo3']);
  }, 2000);
}





