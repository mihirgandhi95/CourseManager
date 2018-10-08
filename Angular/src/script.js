function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  $('.g-signin2').css('display', 'none');
  $('.data ').css('display', 'block');
  $('#email').text(profile.getEmail());
}
