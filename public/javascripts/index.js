$(function(){
  initVisualLogging($(".log"));
  
  // Get UI elements.
  var $username = $(".username");
  var $password = $(".password");
  var $signIn = $(".signin");

  // Subscribe to UI events.
  $signIn.on("click", onSignInClicked);
  $username.on('change', onUsernameChanged);
  $password.on('change', onPasswordChanged);

  function initVisualLogging(jqueryLoggingObject) {
    if (jqueryLoggingObject) {
      var defaultLogFunction = console.log;
      console.log = function (message) {
        // Append object to the corresponding element.
        if (typeof message === 'string' || message instanceof String)
          jqueryLoggingObject.append("<p>"+ message +"</p>");
        else
          jqueryLoggingObject.append("<p>"+ JSON.stringify(message) +"</p>");
        
        // Log message/object to the default console.
        defaultLogFunction.apply(console, arguments);
      };
    }
  }

  function onSignInClicked(){
    console.log("Attempt to sign in with username and password...");
    var username = $username.val();
    var password = $password.val();
    var authUrl = "/auth/?type=default";
    var onSuccess = () => console.log("Authentication succcessful.");
    var onFail = () => console.log("Authentication failed. Reason: "+ "");

    console.log("POST '"+ authUrl +"'...");

    $.post(authUrl, {
      username: username,
      password: password
    });
  }

  function onUsernameChanged(){
    console.log("Username has been changed to '"+ $username.val() +"'.");
  }

  function onPasswordChanged(){
    console.log("Password has been changed.");
  }
});