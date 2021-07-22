let img = 1;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function setTime() {
  var date = new Date();
  let time = date.toTimeString();
  let timed = time.split(":");
  $('#time').html(timed[0] + ":" + timed[1]);
  $('#dayL').html(days[date.getDay()] + ", ");
  $('#yearL').html(date.getFullYear());
  $('#monthL').html(months[date.getMonth()]);
  $('#dateL').html(date.getDate());
  $("#timeD").html(days[date.getDay()] + ", " + timed[0] + ":" + timed[1]);
}

let time = setInterval(setTime, 1000);

  function locked() {
   $(document).ready(function() {
  
  var i = 0, timeOut = 0;
  
  $('#lock').on('mousedown touchstart', function(e) {
    $(this).addClass('pulse2');
    $('.fad').addClass('fadein');
    $(this).removeClass('pulse');
    timeOut = setTimeout(function(){
      $('#lock').removeClass('pulse2');
      $('.fad').removeClass('fadein');
      $('#lock').addClass('pulse');
      $('#lockScreen').hide();
      $('#navs').show();

    }, 2000);
  }).bind('mouseup mouseleave touchend', function() {
    clearTimeout(timeOut);
    $('#lock').removeClass('pulse2');
    $('.fad').removeClass('fadein');
    $('#lock').addClass('pulse');
  });
  
});
  }

  document.getElementById('lock').addEventListener('click', () => {
        if (img == 1) {
            $("#wallpaperLockscreen1").show();
            $("#wallpaperLockscreen2").hide();
            $("#wallpaperLockscreen3").hide();
            $("#wallpaperLockscreen4").hide();
            $("#wallpaperLockscreen5").hide();
            $("#wallpaperLockscreen6").hide();
            img++;
        } else if (img == 2) {
            $("#wallpaperLockscreen1").hide();
            $("#wallpaperLockscreen2").show();
            $("#wallpaperLockscreen3").hide();
            $("#wallpaperLockscreen4").hide();
            $("#wallpaperLockscreen5").hide();
            $("#wallpaperLockscreen6").hide();
            img++;
        } else if (img == 3) {
            $("#wallpaperLockscreen1").hide();
            $("#wallpaperLockscreen2").hide();
            $("#wallpaperLockscreen3").show();
            $("#wallpaperLockscreen4").hide();
            $("#wallpaperLockscreen5").hide();
            $("#wallpaperLockscreen6").hide();
            img++;
        } else if (img == 4) {
            $("#wallpaperLockscreen1").hide();
            $("#wallpaperLockscreen2").hide();
            $("#wallpaperLockscreen3").hide();
            $("#wallpaperLockscreen4").show();
            $("#wallpaperLockscreen5").hide();
            $("#wallpaperLockscreen6").hide();
            img++;
        } else if (img == 5) {
            $("#wallpaperLockscreen1").hide();
            $("#wallpaperLockscreen2").hide();
            $("#wallpaperLockscreen3").hide();
            $("#wallpaperLockscreen4").hide();
            $("#wallpaperLockscreen5").show();
            $("#wallpaperLockscreen6").hide();
            img++;
        } else if (img == 6) {
            $("#wallpaperLockscreen1").hide();
            $("#wallpaperLockscreen2").hide();
            $("#wallpaperLockscreen3").hide();
            $("#wallpaperLockscreen4").hide();
            $("#wallpaperLockscreen5").hide();
            $("#wallpaperLockscreen6").show();
            img++;
        } else {
            $("#wallpaperLockscreen1").hide();
            $("#wallpaperLockscreen2").hide();
            $("#wallpaperLockscreen3").hide();
            $("#wallpaperLockscreen4").hide();
            $("#wallpaperLockscreen5").hide();
            $("#wallpaperLockscreen6").hide();
            img = 1;
        }
        
    });
  