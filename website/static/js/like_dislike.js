$(document).ready(function() {
  $('.like-button').click(function() {
    var liked_user_id = $(this).data('user-id');
    $.ajax({
      type: 'POST',
      url: '/like_profile',
      data: { liked_user_id: liked_user_id },
      success: function() {
        var profile = $('.match-card[data-user-id="' + liked_user_id + '"]');
        $('#liked-profiles').append(profile);
      }
    });
  });

  $('.dislike-button').click(function() {
    var disliked_user_id = $(this).data('user-id');
    $.ajax({
      type: 'POST',
      url: '/dislike_profile',
      data: { disliked_user_id: disliked_user_id },
      success: function() {
        var profile = $('.match-card[data-user-id="' + disliked_user_id + '"]');
        $('#disliked-profiles').append(profile);
      }
    });
  });
});
