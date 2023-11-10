       // -------------------------humburger menu code--------------------------------------//
        function toggleMenu() {
            var leftPanel = document.querySelector('.left-panel');
            var hamburgerIcon = document.querySelector('.hamburger-icon');
            var crossIcon = document.querySelector('.cross-icon');

            // Toggle the 'open-panel' class
            if (leftPanel.classList.contains('open-panel')) {
                leftPanel.classList.remove('open-panel');
                // Show hamburger icon and hide cross icon
                hamburgerIcon.style.display = "block";
                crossIcon.style.display = "none";
            } else {
                leftPanel.classList.add('open-panel');
                // Hide hamburger icon and show cross icon
                hamburgerIcon.style.display = "none";
                crossIcon.style.display = "block";
            }
        }

        // -------------------------Right sidebar code--------------------------------------//

        var customizeButton = document.querySelector('.customize-button');
        var rightSidebar = document.getElementById('right-sidebar');
        var closeSidebarBtn = document.getElementById('close-sidebar-btn');

        // Function to open the sidebar
        function openSidebar() {
            rightSidebar.classList.add('open');
        }

        // Function to close the sidebar
        function closeSidebar() {
            rightSidebar.classList.remove('open');
        }

        // Event listeners for buttons
        customizeButton.addEventListener('click', openSidebar);
        closeSidebarBtn.addEventListener('click', closeSidebar);


        // -------------------------custom cursor code---------------------------------------//

        function updateFileName() {
            var fileInput = document.getElementById('custom-cursor-file');
            var filenameDisplay = document.getElementById('filename');
            var files = fileInput.files;

            if (files.length > 0) {
                filenameDisplay.textContent = files[0].name;
                filenameDisplay.classList.remove('no-file');
            } else {
                filenameDisplay.textContent = 'No file chosen';
                filenameDisplay.classList.add('no-file');
            }
        }

        // Trigger the file input when the filename display is clicked
        document.getElementById('filename').addEventListener('click', function () {
            document.getElementById('custom-cursor-file').click();
        });


        // -------------------------dicord custom input feild --------------------------------------//

        const dropdownHeader = document.querySelector('.dropdown-header');
        const dropdown = document.querySelector('.dropdown');
        const dropdownArrow = document.querySelector('.dropdown-arrow');
        const dropdownList = document.querySelector('.dropdown-list');
        const inputEnter = document.getElementById('discord-input');

        dropdownHeader.addEventListener('click', () => {
            const isOpen = dropdown.classList.contains('open');
            dropdownList.style.display = isOpen ? 'none' : 'block';
            dropdown.classList.toggle('open', !isOpen); // Toggle the "open" class
            dropdownArrow.classList.toggle('rotate', !isOpen); // Toggle the "rotate" class
        });

        const dropdownItems = document.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const selectedValue = e.target.textContent;
                console.log(selectedValue); // You can handle the selected value here
                inputEnter.innerHTML = selectedValue;

                dropdown.classList.remove('open'); // Remove the "open" class
                dropdownArrow.classList.remove('rotate'); // Remove the "rotate" class when selecting a value
                dropdownList.style.display = 'none';

            });
        });

        // Clicking outside the dropdown will close it
        window.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdownList.style.display = 'none';
                dropdown.classList.remove('open'); // Remove the "open" class when clicking outside
                dropdownArrow.classList.remove('rotate'); // Remove the "rotate" class when clicking outside
            }
        });

        // -------------------------Profile Opacity Slider--------------------------------------//        

        const range = document.querySelector(".range");
        const rangeVal = document.getElementById("rangeVal");

        range.addEventListener("mousemove", updateRangeValue);
        range.addEventListener("touchmove", updateRangeValue);

        function updateRangeValue() {
            let result = range.value;
            if (result > 0) {
                rangeVal.textContent = result + "%";
            } else {
                rangeVal.textContent = result;
            }
        }

        // -------------------------Background Effect--------------------------------------//        
        const dropdownHeaderEffect = document.querySelector('.dropdown-effect-header');
        const dropdownEffect = document.querySelector('.dropdown-effect');
        const dropdownArrowEffect = document.querySelector('.dropdown-effect-arrow');
        const dropdownListEffect = document.querySelector('.dropdown-effect-list');
        const inputEffectEnter = document.getElementById('discord-input-effect');

        dropdownHeaderEffect.addEventListener('click', () => {
            const isOpen = dropdownEffect.classList.contains('open');
            dropdownListEffect.style.display = isOpen ? 'none' : 'block';
            dropdownEffect.classList.toggle('open', !isOpen); // Toggle the "open" class
            dropdownArrowEffect.classList.toggle('rotate', !isOpen); // Toggle the "rotate" class
        });

        const dropdownItemsEffect = document.querySelectorAll('.dropdown-effect-item');
        dropdownItemsEffect.forEach(item => {
            item.addEventListener('click', (e) => {
                const selectedValue = e.target.textContent;
                console.log(selectedValue); // You can handle the selected value here
                inputEffectEnter.innerHTML = selectedValue;

                dropdownEffect.classList.remove('open'); // Remove the "open" class
                dropdownArrowEffect.classList.remove('rotate'); // Remove the "rotate" class when selecting a value
                dropdownListEffect.style.display = 'none';
            });
        });

        // Clicking outside the dropdown will close it
        window.addEventListener('click', (e) => {
            if (!dropdownEffect.contains(e.target)) {
                dropdownListEffect.style.display = 'none';
                dropdownEffect.classList.remove('open'); // Remove the "open" class when clicking outside
                dropdownArrowEffect.classList.remove('rotate'); // Remove the "rotate" class when clicking outside
            }
        });

        // -------------------------Badges--------------------------------------//        
        const dropdownHeaderBadge = document.querySelector('.dropdown-badge-header');
        const dropdownBadge = document.querySelector('.dropdown-badge');
        const dropdownArrowBadge = document.querySelector('.dropdown-badge-arrow');
        const dropdownListBadge = document.querySelector('.dropdown-badge-list');
        const inputBadgeEnter = document.getElementById('discord-input-badge');

        dropdownHeaderBadge.addEventListener('click', () => {
            const isOpen = dropdownBadge.classList.contains('open');
            dropdownListBadge.style.display = isOpen ? 'none' : 'block';
            dropdownBadge.classList.toggle('open', !isOpen);
            dropdownArrowBadge.classList.toggle('rotate', !isOpen);
        });

        const dropdownItemsBadge = document.querySelectorAll('.dropdown-badge-item');
        dropdownItemsBadge.forEach(item => {
            item.addEventListener('click', (e) => {
                const selectedValue = e.target.textContent;
                console.log(selectedValue);
                inputBadgeEnter.innerHTML = selectedValue;
                dropdownBadge.classList.remove('open');
                dropdownArrowBadge.classList.remove('rotate');
                dropdownListBadge.style.display = 'none';
            });
        });

        window.addEventListener('click', (e) => {
            if (!dropdownBadge.contains(e.target)) {
                dropdownListBadge.style.display = 'none';
                dropdownBadge.classList.remove('open');
                dropdownArrowBadge.classList.remove('rotate');
            }
        });

        // -------------------------color picker--------------------------------------//        
        const inputBox = document.getElementById('input-box');
        const colorPicker = document.getElementById('color-picker');

        colorPicker.addEventListener('input', function () {
            inputBox.value = colorPicker.value;
        });
        // -------------------------Music adjust--------------------------------------//        
        const volumeRange = document.querySelector(".volume-range");
        const volumeRangeVal = document.getElementById("volume-rangeVal");

        volumeRange.addEventListener("mousemove", updateVolumeRangeValue);
        volumeRange.addEventListener("touchmove", updateVolumeRangeValue);

        function updateVolumeRangeValue() {
            let result = volumeRange.value;
            if (result > 0) {
                volumeRangeVal.textContent = result + "%";
            } else {
                volumeRangeVal.textContent = result;
            }
        }


        // -------------------------Custom font--------------------------------------//        
        const dropdownHeaderFont = document.querySelector('.dropdown-font-header');
        const dropdownFont = document.querySelector('.dropdown-font');
        const dropdownArrowFont = document.querySelector('.dropdown-font-arrow');
        const dropdownListFont = document.querySelector('.dropdown-font-list');
        const inputFontEnter = document.getElementById('discord-input-font');

        dropdownHeaderFont.addEventListener('click', () => {
            const isOpen = dropdownFont.classList.contains('open');
            dropdownListFont.style.display = isOpen ? 'none' : 'block';
            dropdownFont.classList.toggle('open', !isOpen);
            dropdownArrowFont.classList.toggle('rotate', !isOpen);
        });

        const dropdownItemsFont = document.querySelectorAll('.dropdown-font-item');
        dropdownItemsFont.forEach(item => {
            item.addEventListener('click', (e) => {
                const selectedValue = e.target.textContent;
                console.log(selectedValue);
                inputFontEnter.innerHTML = selectedValue;
                dropdownFont.classList.remove('open');
                dropdownArrowFont.classList.remove('rotate');
                dropdownListFont.style.display = 'none';
            });
        });

        window.addEventListener('click', (e) => {
            if (!dropdownFont.contains(e.target)) {
                dropdownListFont.style.display = 'none';
                dropdownFont.classList.remove('open');
                dropdownArrowFont.classList.remove('rotate');
            }
        });

        // -------------------------Premium button--------------------------------------//        
        const premiumBtn = document.getElementById('prem-btn');
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        const lastSidebarItem = sidebarItems[sidebarItems.length - 1]; // Get the last .sidebar-item
        const fontContainer = document.querySelector('.font-container');
        // Add a click event listener to the premium button
        premiumBtn.addEventListener('click', function () {
            // Check the current text of the button
            if (premiumBtn.textContent === 'Premium') {
                // Loop through all sidebar items and hide them, except the last one
                sidebarItems.forEach((item, index) => {
                    if (index !== sidebarItems.length - 1) { // Check if it's not the last item
                        item.style.display = 'none';
                    }
                });
                // Change button text to 'Previous'
                fontContainer.style.display = 'block';
                premiumBtn.textContent = 'Previous';
            } else {
                // Loop through all sidebar items and show them, except the last one
                sidebarItems.forEach((item, index) => {
                    if (index !== sidebarItems.length - 1) { // Check if it's not the last item
                        item.style.display = 'block';
                    }
                });
                // Change button text to 'Premium'
                fontContainer.style.display = 'none';
                premiumBtn.textContent = 'Premium';
            }
        });
