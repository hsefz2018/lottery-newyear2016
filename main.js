(function (window) {
  'use strict';

  var Student = function (year, klass, num, name) {
    this.year = year;
    this.klass = klass;
    this.num = num;
    this.name = name;
  };
  //Student.prototype.distribution = [];
  Student.prototype.show = function () {
    console.log("Hello, I'm " + this.name);
  };

  var students = [
    new Student(2017, 12, 14, 'bla'),
    new Student(2017, 12, 16, 'bluh'),
    new Student(2017, 12, 18, 'bleh'),
    new Student(2017, 13, 233, 'hoho'),
    new Student(2017, 13, 238, 'haha'),
    new Student(2017, 13, 243, 'hihi'),
    new Student(2017, 14, 6666, 'yo'),
    new Student(2017, 14, 9999, 'yay'),
    new Student(2017, 14, 66666, 'yup'),
    new Student(2017, 14, 99999, 'yey'),
    new Student(2018, 9, 9, 'lsq'),
    new Student(2018, 9, 19, 'wdq'),
    new Student(2018, 9, 99, 'hahahaha'),
    new Student(2018, 9, 999, 'hohohoho'),
    new Student(2018, 88, 1, 'sbd'),
    new Student(2018, 88, 2, 'sth'),
    new Student(2018, 88, 3, 'spl'),
    new Student(2018, 88, 4, 'stm'),
  ];
  for (var i in students) {
    students[i].show();
  }
 
  var random_under = function (upbound) {
    return Math.floor(Math.random() * upbound); 
  };
  var _02d = function (i) {
    return i < 10 ? ('0' + i.toString()) : i.toString();
  };

  var roll = function () {
    var roll_progress = 0;
    var sel_year = -1, sel_klass = -1;
    var timer_id;
    timer_id = setInterval(function () {
      var len = students.length, idx = random_under(len);
      if (roll_progress === 0) {
        // Do nothing
      } else if (roll_progress === 1) {
        // Year selected
        if (sel_year === -1) sel_year = students[idx].year;
        else while (students[idx].year != sel_year) idx = random_under(len);
      } else if (roll_progress === 2 || ++roll_progress % 4 === 0) {
        // Year & class selected
        while (students[idx].year != sel_year) idx = random_under(len);
        if (sel_klass === -1) sel_klass = students[idx].klass;
        else while (students[idx].year != sel_year || students[idx].klass != sel_klass)
          idx = random_under(len);
      } else return;
      document.getElementById('year-disp').innerText = students[idx].year;
      document.getElementById('klass-disp').innerText = _02d(students[idx].klass);
      document.getElementById('num-disp').innerText = _02d(students[idx].num);
      document.getElementById('name-disp').innerText = students[idx].name;
    }, 50);
    setTimeout(function () { roll_progress = 1; }, 2000);
    setTimeout(function () { roll_progress = 2; }, 4000);
    setTimeout(function () { roll_progress = 3; }, 6000);
    setTimeout(function () { clearInterval(timer_id); }, 7200);
    setTimeout(function () {
      document.getElementById('btn-more').classList.remove('collapse');
      document.getElementById('btn-okay').classList.remove('collapse');
      var disp_card = document.getElementById('display-card');
      disp_card.classList.remove('expand');
      disp_card.classList.add('expand-more');
    }, 8200);
  };

  document.getElementById('btn-go').onclick = function () {
    document.getElementById('btn-go').classList.add('collapse');
    document.getElementById('display-card').classList.add('expand');
    roll();
  };
  document.getElementById('btn-more').onclick = function () {
    document.getElementById('btn-more').classList.add('collapse');
    document.getElementById('btn-okay').classList.add('collapse');
    document.getElementById('display-card').classList.remove('expand-more');
    document.getElementById('display-card').classList.add('expand');
    roll();
  };
}(window));
