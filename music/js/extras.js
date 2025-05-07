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
function cleanUp() {
            console.clear();
            cld = "Cleaning up in ";
        let countdown = 5;
        const interval = setInterval(() => {
            console.log(cld + countdown);
            countdown--;
            if (countdown < 0) {
                clearInterval(interval);
                console.clear();
                console.log('Cleanup complete.');
            }
        }, 1000);
        }
// for some reason, the musicwebsite.html was not going any farther than this, due to some random html tags. 
// it is not showing on the .html, so i have replaced it with this 
            function enableDev() {
                console.log('Enter the password: (hint: contains "i")');
                const password = prompt('Enter password:');
                if (password === 'i7DAxSt4') {
                    console.clear();
                    console.log('Developer Mode Activated');
                    console.log('Commands:');
                    console.log('autoexec(), showBenefits(), showDrawbacks(), showFAQs(), showChart1(), showChart2(), showChart3(), showChart4(), showChart5(), devInfo()');
                    console.log('To exit developer mode, refresh the page.');
                } else {
                    console.log('Incorrect password. Developer mode not activated.');
                }
            }
            function secret1() {
                console.log('Enter the password: (hint: "MSI Afterburner")');
                const password = prompt('Enter the password: (hint: "MSI Afterburner")');
                if (password === 'overclocking') {
                    console.log('CORRECT PASSWORD')
                } else {
                    console.log('Incorrect password. Developer mode not activated.');
                }
            }
            function forceShow() {
                const elementName = prompt('Enter the ID of the element you want to show: (Case sensitive)');
                const element = document.getElementById(elementName);
                if (element) {
                    element.style.display = 'block';
                    alert('Element with ID ${elementName} is now visible.');
                } else {
                    alert('No element found with ID "${elementName}".');
                }
            }
            function listFunctions(Serious) {
                console.clear();
                if (Serious ===  true or Serious === 1 ) { 
                } else {
                console.log('Available functions:');
                console.log('autoexec() - Runs the OnLoad script.');
                console.log('cleanUp() - Cleans up the console with a countdown.');
                console.log('enableDev() - Activates developer mode.');
                console.log('secret1() - Prompts for a secret password.');
                console.log('forceShow() - Forces an element to be displayed by ID. Case sensitive.');
                console.log('showBenefits() - Displays the benefits section.');
                console.log('showDrawbacks() - Displays the drawbacks section.');
                console.log('showFAQs() - Displays the FAQs section.');
                console.log('showChart1() - Displays the first chart.');
                console.log('showChart2() - Displays the second chart.');
                console.log('showChart3() - Displays the third chart.');
                console.log('showChart4() - Displays the fourth chart.');
                console.log('showChart5() - Displays the fifth chart.');
                console.log('devInfo() - Displays developer information (if implemented).');
                }
            }
// decided 
// developer functions. grayed out because it should be inline, for non internet use. 
