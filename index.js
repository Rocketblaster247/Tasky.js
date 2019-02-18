const Tasky = function () {
  this.fps = 60;
  this.tasks = [];
	this.overClock = false;
  this.setFPS = function (fps) {
    if (fps == this.fps) {
      console.log("FPS was already set to " + fps);
    } else {
      this.fps = fps;
    }
  };
  this.addTask = function (func) {
    this.tasks.push(func);
  };
	this.execFunc = function () {
		
	};
	this.execTasks = function () {
		var func = this.execFunc();
		
	};
};
