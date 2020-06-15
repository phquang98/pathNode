class Path {
  // Properties
  separator;
  currentPath;

  // Constructor
  constructor(pathArg, separatorArg) {
    if (pathArg === undefined && separatorArg === undefined) {
      this.separator = "/";
      this.currentPath = this.separator;
    } else {
      this.currentPath = pathArg;
      separatorArg === undefined
        ? (this.separator = "/")
        : (this.separator = separatorArg);
    }
  }

  // Methods

  // Returns a str represent the path
  getCurrentPath() {
    return this.currentPath;
  }

  // Simulates moving to a child path or a new absolute path
  cd(pathToChangeArg) {
    // Moving to an absolute path
    if (pathToChangeArg.startsWith(this.separator)) {
      this.currentPath = pathToChangeArg;
    }
    // Moving to a relative parent path
    else if (count(pathToChangeArg, this.separator) === 1) {
      let parentPath = this.currentPath.lastIndexOf(this.separator);
      let relevantPath = pathToChangeArg.substring(3);
      this.currentPath = this.currentPath
        .substring(0, parentPath + 1)
        .concat("", relevantPath);
    }
    // Moving to a complex path
    else if (count(pathToChangeArg, this.separator) !== 1) {
      this.currentPath = pathOps(this.currentPath, pathToChangeArg);
    }
    // Moving to a child path
    else {
      this.currentPath = this.currentPath + this.separator + pathToChangeArg;
    }
    return this.currentPath;
  }
}

// Helper function for cd method
function count(string, character) {
  let res = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === character) {
      res++;
    }
  }
  return res;
}

// Helper function for cd method, returns an array contains all the phrase of the desired path
function pathOps(currentPath, cmd) {
  let currentPathCltion = currentPath.split("/");
  let cmdCltion = cmd.split("/");
  for (let i = 0; i < cmdCltion.length; i++) {
    if (cmdCltion[i] === "..") {
      currentPathCltion.splice(-1, 1);
    } else {
      currentPathCltion.push(cmdCltion[i]);
    }
  }
  return currentPathCltion.join("/");
}

module.exports = Path;
