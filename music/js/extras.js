function loadedExtras() {
  console.log('Loaded Extras')
}

function checkConsoleWarning() {
            document.getElementById("consoleWarning").style.display = "block";
        }
        function notref() {
            console.error('⚠️ Not refrenced. Please modify <a> element to properly go to the website.');
                checkConsoleWarning()
        }
        function MSCDEX() {
            console.log('E-IDE Device driver for MS-DOS')
            console.log('Device name: BANANA')
            console.log('Drive D: is now CD-ROM 1')
        }
        function hideWarn() {
            document.getElementById('analyticsInfo').style.display = 'none';
            console.log('Analytics info hidden');
        }
        function beginBootloader() {
            console.log('Found Bootloader.dat! ')
        }
