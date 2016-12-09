# Contributing

* Fork this repository
* Add main repo as upstream:
```
$ git remote add upstream https://github.com/GuildCrafts/lizardboard/
```
* Take a ticket from the Ready section of the [project page](https://github.com/GuildCrafts/lizardboard/projects). (Some tickets in the Backlog may be ready for work, but are probably dependent on items in the Ready section - please check with maintainer if you're interested in Backlog work.)
* Create a topic branch.  Branch names should begin with the issue number, followed by text describing the work.  Please use lower-kebab-case (i.e. `2-readme-updated`).
* Squash commits
* Rebase from master
```
$ git fetch upstream
$ git rebase upstream/master
```
* Submit a pull request

## Quality Requirements
* Write intention revealing code - use well named identifiers for variables, functions, css classes, etc.
* Functions are small and serve a single purpose
* Documentation is updated (including the [readme](README.md), and any API documentation)
* All tests passing - aiming for 100% test coverage
* No linting errors
* Spaces (2), not tabs
* No lines may be longer than 80 characters
