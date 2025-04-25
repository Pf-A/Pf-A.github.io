function loadedSoleoid() {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('Loaded Solenoid.js');
  console.log('Type "solenoidSettings()" to change solenoids settings.');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
}
// solenoid.js Copyright 2025 Mike Carlson OR "ThePuffinProgrammer"

function init() {
    console.clear();
    // put needed init code here if needed
    console.log('Solenoid initialized');
    console.log('Solenoid is now [active]');
}

function develop() {
    console.log('Developer code: analyticUpdate(), init().');
}

function analyticUpdate() {
    const analyticsData = {
        timestamp: new Date().toISOString(),
        event: 'analyticUpdate',
        status: 'active'
    };
    uploadAnalytics(analyticsData);
}

function uploadAnalytics(data) {
    const serverUrl = 'https://thepuffinprogrammer.github.io/analytics.html'; // Replace with your server URL

    fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server responded with status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        console.log('Analytics uploaded successfully:', result);
    })
    .catch(error => {
        console.error('Error uploading analytics:', error);
    });
}

function begin() {
    console.log('solenoid analytics manager - sender (client)');
    console.log('solenoid.js copyright 2025 Mike carlson "ThePuffinProgrammer"');
    console.log('Solenoid is now [active]');
    develop();
    init();
    analyticUpdate(); // Trigger analytics upload
}
