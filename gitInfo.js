/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = ("Git is a program that creates local repositories that can be pushed to a version control website that we use called github.");
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = ("Github is a website that can be used for version control that we will use to store git files, and organize them using separate commits. Just in case we need to go back to a previous version of our software.");
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = ("Git Init is the first command that we use to initiate a local repository for the files that we have open in our editor at that point");
//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = ("Git clone is a command that we can use make a copy of a repository and open it in a new location");
//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatus = ("Git status is a command that we can use to check which files are and are not being tracked by git");
//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition = ("Git add is a command that we use to place a repository into a staging area where they are ready to commit, we can add all or specific files. ");
const gitAddCode = ("git add .")
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = ("git commit is a snapshot of our repository at a specific point in time, giving us the ability to see how the file has changed, as well as go back to a previous version if we need to for any reason");
const gitCommitCode = ('git commit -m "initial commit"')
//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = ("Git push is the command we use to upload our repository to gitHub or any other website that can remotely track our git repositories")