// const counters = document.querySelectorAll(".counter");

// counters.forEach(counter => {
//     let initial_count = 0;
//     const final_count = parseInt(counter.dataset.count);

//     // Function to update the counter value
//     function updateCounting() {
//         if (initial_count < final_count) {
//             initial_count += 5;
//             counter.innerText = initial_count;
//         }

//         if (initial_count >= 1000 && initial_count < 10000) {
//             counter.innerText = (initial_count / 1000).toFixed(1) + 'K';
//         } else if (initial_count >= 10000 && initial_count < 1000000) {
//             counter.innerText = (initial_count / 1000).toFixed(0) + 'K';
//         } else if (initial_count >= 1000000) {
//             counter.innerText = (initial_count / 1000000).toFixed(1) + 'M';
//         }

//         if (initial_count >= final_count) {
//             clearInterval(counting);
//             counter.innerText = final_count < 1000 ? final_count : counter.innerText;
//         }
//     }

//     let counting;
//     function startCounting() {
//         counting = setInterval(updateCounting, 1);
//     }

//     // Detect scroll event and check if the section is in view
//     window.addEventListener("scroll", function() {
//         const countSection = document.querySelector(".countnumber");
        
//         if (isElementInView(countSection)) {
//             // Add a class to trigger the visibility animation (if desired)
//             countSection.classList.add("visible");
            
//             // Start counting once the section is visible
//             startCounting();
            
//             // Remove the scroll event listener to ensure counting happens only once
//             window.removeEventListener("scroll", arguments.callee);
//         }
//     });

//     // Helper function to check if the element is in view
//     function isElementInView(el) {
//         const rect = el.getBoundingClientRect();
//         return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
//     }
// });



// Fetch the current visitor count from localStorage, or initialize to 0 if it doesn't exist.
let visitorCount = localStorage.getItem('visitorCount');
if (!visitorCount) {
    visitorCount = 0; // If no count is found, initialize to 0.
} else {
    visitorCount = parseInt(visitorCount); // Ensure it's treated as an integer.
}

// Increase the visitor count by 1
visitorCount++;

// Save the updated visitor count back to localStorage
localStorage.setItem('visitorCount', visitorCount);

// Now, you can update the visitor counter element on the page
const visitorCounter = document.querySelector('.countnumber .item .num[data-count]');

if (visitorCounter) {
    visitorCounter.dataset.count = visitorCount; // Update the count value in the dataset
}

// Your existing counter code for displaying the count on the page
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let initial_count = 0;
    const final_count = parseInt(counter.dataset.count);

    // Function to update the counter value
    function updateCounting() {
        if (initial_count < final_count) {
            initial_count += 5;
            counter.innerText = initial_count;
        }

        if (initial_count >= 1000 && initial_count < 10000) {
            counter.innerText = (initial_count / 1000).toFixed(1) + 'K';
        } else if (initial_count >= 10000 && initial_count < 1000000) {
            counter.innerText = (initial_count / 1000).toFixed(0) + 'K';
        } else if (initial_count >= 1000000) {
            counter.innerText = (initial_count / 1000000).toFixed(1) + 'M';
        }

        if (initial_count >= final_count) {
            clearInterval(counting);
            counter.innerText = final_count < 1000 ? final_count : counter.innerText;
        }
    }

    let counting;
    function startCounting() {
        counting = setInterval(updateCounting, 1);
    }

    // Detect scroll event and check if the section is in view
    window.addEventListener("scroll", function() {
        const countSection = document.querySelector(".countnumber");

        if (isElementInView(countSection)) {
            // Add a class to trigger the visibility animation (if desired)
            countSection.classList.add("visible");

            // Start counting once the section is visible
            startCounting();

            // Remove the scroll event listener to ensure counting happens only once
            window.removeEventListener("scroll", arguments.callee);
        }
    });

    // Helper function to check if the element is in view
    function isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
});
