// Anti copyright code, automatically triggered if recording is detected.
        // Anti copyright code, automatically triggered if recording is detected.
function loadedCopyright() {
        console.log('Loaded copyright detector')
}
        function antiCopyright() {
            alert("This website is protected by copyright law. Unauthorized use or reproduction is prohibited.");
            console.warn("Anti-copyright warning triggered.");
            alert('This WILL disable all images, styles, and scripts on this page.');
            document.querySelectorAll('img, script').forEach(el => el.style.display = 'none');
            document.querySelectorAll('link[rel="stylesheet"]').forEach(el => el.remove());
        }

        // Function to detect if the computer is recording
        function detectRecording() {
            console.log('Began recording protection.');
            const mediaDevices = navigator.mediaDevices;
            if (mediaDevices && mediaDevices.enumerateDevices) {
                mediaDevices.enumerateDevices().then(devices => {
                    const recordingDevices = devices.filter(device => device.kind === 'audioinput' || device.kind === 'videoinput');
                    if (recordingDevices.length > 0) {
                        console.log("Input devices detected, but not necessarily recording.");
                    } else {
                        console.log("No input devices detected.");
                    }
                }).catch(err => {
                    console.error("Error detecting recording devices:", err);
                });
            } else {
                console.warn("Media devices API not supported.");
            }
            console.log('Ended recording protection.');
        }
// put the detectRecording function anywhere, but it is included here as a onload function.
// too lazy to put it here :P
