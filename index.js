const Tasky = function () {
  this.fps = 60;
  this.tasks = [];
  this.task = 0;
	this.overClock = false;
  this.setFPS = function (fps) {
    if (fps == this.fps) {
      console.log("FPS was already set to " + fps + "!");
    } else {
      this.fps = fps;
    }
  };
  this.addTask = function (func) {
    this.tasks.push(func);
  };
  this.start = function () {
    if (tasks.length <= 0) {
      console.log("No Tasks!");
      return;
    }
    (function () {
      this.tasks[this.task](this);
      if ((this.task ++) > = this.tasks.length) {
        this.task = 0;
      }
      window.requestAnimationFrame();
    })();
  };
};
