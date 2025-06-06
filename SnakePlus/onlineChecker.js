function checkServerOnEXT() {
  superlog('GitHub checker: ONLINE')
  var statusElem = document.getElementById('online-status');
  if (serverCheck === true) {
                    statusElem.textContent = "Status: Online";
                } else {
                    statusElem.textContent = "Status: Offline";
                }
}
