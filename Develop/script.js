const breakdownButton = $(".saveBtn");
const userEmailSpan = $("#first");
const userEmailSpan1 = $("#second");
const userEmailSpan2 = $("#third");
const userEmailSpan3 = $("#fourth");
const userEmailSpan4 = $("#fifth");
const userEmailSpan5 = $("#sixth");
const userEmailSpan6 = $("#seventh");
const userEmailSpan7 = $("#eigth");
const userEmailSpan8 = $("#ninth");
const userEmailSpan9 = $("#tenth");

var x = "hello";

var updatetime = function settimedate() {
  var today = moment().format("MMM Do, YYYY [-] h:mm:ss a");
  $("#currentDay").text(today);
};

checktime();
checktime1();
checktime2();
checktime3();
checktime4();
checktime5();
checktime6();
checktime7();
checktime8();
checktime9();

function checktime() {
  var today1 = moment().format("H");

  console.log(today1);

  if (today1 >= 10) {
    userEmailSpan.addClass("past");
    return;
  }

  if (today1 < 9) {
    userEmailSpan.addClass("future");
    return;
  }

  if ((today1 = 9)) {
    userEmailSpan.addClass("present");
    return;
  }
}

function checktime1() {
  var today1 = moment().format("H");

  console.log(today1);

  if (today1 >= 11) {
    userEmailSpan1.addClass("past");
    return;
  }

  if (today1 < 10) {
    userEmailSpan1.addClass("future");
    return;
  }

  if ((today1 = 10)) {
    userEmailSpan1.addClass("present");
    return;
  }
}

function checktime2() {
    var today1 = moment().format("H");
  
  
    if (today1 >= 12) {
      userEmailSpan2.addClass("past");
      return;
    }
  
    if (today1 < 11) {
      userEmailSpan2.addClass("future");
      return;
    }
  
    if ((today1 = 11)) {
      userEmailSpan2.addClass("present");
      return;
    }
  }
  function checktime3() {
    var today1 = moment().format("H");
  
  
    if (today1 >= 13) {
      userEmailSpan3.addClass("past");
      return;
    }
  
    if (today1 < 12) {
      userEmailSpan3.addClass("future");
      return;
    }
  
    if ((today1 = 12)) {
      userEmailSpan3.addClass("present");
      return;
    }
  }
  function checktime4() {
    var today1 = moment().format("H");
  
    if (today1 >= 14) {
      userEmailSpan4.addClass("past");
      return;
    }
  
    if (today1 < 13) {
      userEmailSpan4.addClass("future");
      return;
    }
  
    if ((today1 = 13)) {
      userEmailSpan4.addClass("present");
      return;
    }
  }
  function checktime5() {
    var today1 = moment().format("H");
  
    if (today1 >= 15) {
      userEmailSpan5.addClass("past");
      return;
    }
  
    if (today1 < 14) {
      userEmailSpan5.addClass("future");
      return;
    }
  
    if ((today1 = 14)) {
      userEmailSpan5.addClass("present");
      return;
    }
  }

  function checktime6() {
    var today1 = moment().format("H");
  
    if (today1 >= 16) {
      userEmailSpan6.addClass("past");
      return;
    }
  
    if (today1 < 15) {
      userEmailSpan6.addClass("future");
      return;
    }
  
    if ((today1 = 15)) {
      userEmailSpan6.addClass("present");
      return;
    }
  }

  function checktime7() {
    var today1 = moment().format("H");
  
    if (today1 >= 17) {
      userEmailSpan7.addClass("past");
      return;
    }
  
    if (today1 < 16) {
      userEmailSpan7.addClass("future");
      return;
    }
  
    if ((today1 = 16)) {
      userEmailSpan7.addClass("present");
      return;
    }
  }

  function checktime8() {
    var today1 = moment().format("H");
  
    if (today1 >= 18) {
      userEmailSpan8.addClass("past");
      return;
    }
  
    if (today1 < 17) {
      userEmailSpan8.addClass("future");
      return;
    }
  
    if ((today1 = 17)) {
      userEmailSpan8.addClass("present");
      return;
    }
  }

  function checktime9() {
    var today1 = moment().format("H");
  
    if (today1 >= 19) {
      userEmailSpan9.addClass("past");
      return;
    }
  
    if (today1 < 18) {
      userEmailSpan9.addClass("future");
      return;
    }
  
    if ((today1 = 18)) {
      userEmailSpan9.addClass("present");
      return;
    }
  }

setInterval(updatetime, 1000);

renderLastRegistered();
renderLastRegistered1();
renderLastRegistered2();
renderLastRegistered3();
renderLastRegistered4();
renderLastRegistered5();
renderLastRegistered6();
renderLastRegistered7();
renderLastRegistered8();
renderLastRegistered9();

function renderLastRegistered() {
  var email = localStorage.getItem("0");

  if (!email) {
    return;
  }

  userEmailSpan.val(email);
}

function renderLastRegistered1() {
  var email1 = localStorage.getItem("1");

  if (!email1) {
    return;
  }

  userEmailSpan1.val(email1);
}
function renderLastRegistered2() {
  var email2 = localStorage.getItem("2");

  console.log(email2);

  if (!email2) {
    return;
  }

  userEmailSpan2.val(email2);
}
function renderLastRegistered3() {
  var email3 = localStorage.getItem("3");

  if (!email3) {
    return;
  }

  userEmailSpan3.val(email3);
}

function renderLastRegistered4() {
  var email4 = localStorage.getItem("4");

  if (!email4) {
    return;
  }

  userEmailSpan4.val(email4);
}
function renderLastRegistered5() {
  var email5 = localStorage.getItem("5");

  if (!email5) {
    return;
  }

  userEmailSpan5.val(email5);
}

function renderLastRegistered6() {
  var email6 = localStorage.getItem("6");

  if (!email6) {
    return;
  }

  userEmailSpan6.val(email6);
}
function renderLastRegistered7() {
  var email7 = localStorage.getItem("7");

  if (!email7) {
    return;
  }

  userEmailSpan7.val(email7);
}
function renderLastRegistered8() {
  var email8 = localStorage.getItem("8");

  if (!email8) {
    return;
  }

  userEmailSpan8.val(email8);
}
function renderLastRegistered9() {
  var email9 = localStorage.getItem("9");

  if (!email9) {
    return;
  }

  userEmailSpan9.val(email9);
}

breakdownButton[0].addEventListener("click", function (event) {
  event.preventDefault();
  var activity = $(this).siblings(".trip").val();
  console.log(this);
  localStorage.setItem("0", activity);
});

breakdownButton[1].addEventListener("click", function (event) {
  event.preventDefault();
  var activity1 = $(this).siblings(".trip").val();
  localStorage.setItem("1", activity1);
});

breakdownButton[2].addEventListener("click", function (event) {
  event.preventDefault();
  var activity2 = $(this).siblings(".trip").val();
  localStorage.setItem("2", activity2);
});

breakdownButton[3].addEventListener("click", function (event) {
  event.preventDefault();
  var activity3 = $(this).siblings(".trip").val();
  localStorage.setItem("3", activity3);
});

breakdownButton[4].addEventListener("click", function (event) {
  event.preventDefault();
  var activity4 = $(this).siblings(".trip").val();
  localStorage.setItem("4", activity4);
});

breakdownButton[5].addEventListener("click", function (event) {
  event.preventDefault();
  var activity5 = $(this).siblings(".trip").val();
  localStorage.setItem("5", activity5);
});

breakdownButton[6].addEventListener("click", function (event) {
  event.preventDefault();
  var activity6 = $(this).siblings(".trip").val();
  localStorage.setItem("6", activity6);
});

breakdownButton[7].addEventListener("click", function (event) {
  event.preventDefault();
  var activity7 = $(this).siblings(".trip").val();
  localStorage.setItem("7", activity7);
});
breakdownButton[8].addEventListener("click", function (event) {
  event.preventDefault();
  var activity8 = $(this).siblings(".trip").val();
  localStorage.setItem("8", activity8);
});
breakdownButton[9].addEventListener("click", function (event) {
  event.preventDefault();
  var activity9 = $(this).siblings(".trip").val();
  localStorage.setItem("9", activity9);
});
