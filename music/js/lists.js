function loadedLists() {
            console.log('Loaded Lists.js')

function showBenefits() {
            document.getElementById("benefits").style.display = "block";
            document.getElementById("drawbacks").style.display = "none";
            document.getElementById("FAQs").style.display = "none";
        }

        function showDrawbacks() {
            document.getElementById("benefits").style.display = "none";
            document.getElementById("drawbacks").style.display = "block";
            document.getElementById("FAQs").style.display = "none";
        }

        function showFAQs() {
            document.getElementById("benefits").style.display = "none";
            document.getElementById("drawbacks").style.display = "none";
            document.getElementById("FAQs").style.display = "block";
        }
