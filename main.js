(function (window) {
  'use strict';

  var Student = function (year, klass, num, name) {
    this.year = year;
    this.klass = klass;
    this.num = num;
    this.name = name;
  };
  Student.prototype.show = function () {
    console.log("Hello, I'm " + this.name);
  };

  var students = [
    new Student(2018, 9, 9, 'lsq'),
    new Student(2018, 9, 19, 'wdq')
  ];
  for (var i in students) {
    students[i].show();
  }

  document.getElementById('btn-go').onclick = function () {
    document.getElementById('btn-go').classList.add('collapse');
    document.getElementById('display-card').classList.add('expand');
    setTimeout(function () {
      document.getElementById('btn-more').classList.remove('collapse');
      document.getElementById('btn-okay').classList.remove('collapse');
    }, 1000);
  };
}(window));
