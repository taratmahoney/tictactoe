$(function () { 
  function game() {
    start_game ()

    var current_player = "x"

    $("td").on("click", function(){
      move(current_player, this)
      current_player =  other_player(current_player)
      checkboard()
    })
  }

  function move(player,td) {
    $(td).off('click');
    
    $(td).text(player);
    $(td).addClass(player);
    
    $("#current_player ."+player).hide()
    $("#current_player ."+other_player(player))
  }

  function start_game() {
  $("#pick_players").hide()

  $("#current_player .x")
  .show()
  $("#current_player .o").hide()
  $("#current_player").show()

  }

  $.fn.all = function(selector){
    return this.not(selector).length === 0
  }

  function other_player(player) {
    if (player === "x")
      return "o"
    else
      return "x"
  }

  function is_full() {
    return $("td").all(".x, .o")
  }

  function is_winner(player){
    for (var winning_move = 0; winning_move <= 7; winning_move ++){
      if ($("td."+winning_move).all("."+player)) {
        return true
      }
    }

    return false
  }

  function checkboard(){
    if (is_winner("x")){
      $("#x-wins").fadeIn(3000);
      $("#x-wins h3").text("X wins! Refresh to play again.")
    } else if (is_winner("o")){
      $("#o-wins").fadeIn(3000);
      $("#o-wins h3").text("O Wins! Refresh to play again.")
    } else if (is_full()){
      $("#no-wins").fadeIn(3000);
      $("#no-wins h3").text("Nobody wins! Refresh to play again.")
    }
  }
$("#start").on("click", function() { game() })

})

