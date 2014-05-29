## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
Does not add new files to respository, but brings new files to Git's attention to include in it's 'snapshots' of repository.

#### branch
Command allows you to build a new branch from perhaps an existing project. 

#### checkout
A navigational command that lets you "check out" a respository that you are not currently inside. (i.e git checkout master - allows you to checkout the master branch. git checkout cats- checkout another branch.)

#### clone
Command to clone an already exisitng respository into a newly created directory. (Similar to what DBC had us do when we first cloned the phase_0_unit_1 files onto our local directory.)

#### commit
Git's most important command. After any change to the project, allows a user to take a 'snapshot' of the project in it's current state and keeps track of all the versions/iterations of the existing project. Each version usually requires a message that is associated with each version (or 'snapshot'). 

#### fetch
Command imports commits from a already existing remote repository into your local repository. Note that this command is different from 'pull' command as 'pull' does both 'fetch' and 'merge' branches. Fetch only pulls commits to your local repository and gives you a chance to review changes before integrating into your copy of the project.

#### log
The 'git log' command give you a 'log' of all your commits and allows you to see them all. 

#### merge
Git's 'merge' command allows users who have worked on branched off versions of a project to reintegrate the project to the master branch where other collaborators and view. (i.e.'git merge cats' would take all changes to 'cats' branch and merge with master.)

#### pull
Command allows you to 'pull' the most updated version of your respository to work with and then by default 'merge' it into the branch you are in when you made the request.

#### push
Allows you to add your project/commits to your repository where it is visible online and tracked through git (or github).

#### reset
A reset is similar to amend where the Head moves to the new reset version of your project. Git doesn't know of the past commits, but they still exist. 

#### rm
Removes files from the index or working tree and index. 

#### status
Command to check the status of the resposity. Allows you to see what has been commmited, changes that have not been committed, and which branch you are working on.

## Release 4: Git Workflow

- Push files to a remote repository
- Fetch changes
- Commit locally

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection