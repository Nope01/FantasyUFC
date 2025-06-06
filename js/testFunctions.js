/**
 * TEST FUNCTIONS MODULE
 * This file contains various test functions demonstrating different JavaScript features
 * that can be called from the HTML page.
 */

// 1. Basic Functions

/**
 * Displays a greeting message in the console and as an alert
 * @param {string} name - The name to greet
 */
function greetUser(name) {
    const message = `Hello, ${name}! Welcome to JavaScript.`;
    console.log(message); // Log to console
    return message; // Return the message for other uses
}

/**
 * Calculates the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function addNumbers(a, b) {
    return a + b;
}

// 2. DOM Manipulation Functions

/**
 * Changes the background color of an element
 * @param {string} elementId - The ID of the element to modify
 * @param {string} color - The color to set (can be hex, rgb, or color name)
 */
function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = color;
    } else {
        console.error(`Element with ID ${elementId} not found`);
    }
}

/**
 * Creates a new HTML element and appends it to a parent
 * @param {string} parentId - ID of the parent element
 * @param {string} tag - The tag name of the new element (e.g., 'div', 'p')
 * @param {string} text - The text content for the new element
 * @param {string} className - Optional class name for styling
 */
function createAndAppendElement(parentId, tag, text, className = '') {
    const parent = document.getElementById(parentId);
    if (!parent) {
        console.error(`Parent element with ID ${parentId} not found`);
        return;
    }

    const newElement = document.createElement(tag);
    newElement.textContent = text;
    if (className) {
        newElement.classList.add(className);
    }
    parent.appendChild(newElement);
}

// 3. Event-Related Functions

/**
 * Sets up a button click handler that shows the current date and time
 * @param {string} buttonId - ID of the button element
 * @param {string} outputId - ID of the element where to display the result
 */
function setupDateTimeButton(buttonId, outputId) {
    const button = document.getElementById(buttonId);
    const output = document.getElementById(outputId);

    if (!button || !output) {
        console.error(`Button or output element not found`);
        return;
    }

    button.addEventListener('click', () => {
        const now = new Date();
        output.textContent = `Current date and time: ${now.toLocaleString()}`;
    });
}

// 4. Array and Object Functions

/**
 * Processes an array of numbers and returns information about it
 * @param {number[]} numbers - Array of numbers to analyze
 * @returns {object} An object containing sum, average, min, and max
 */
function analyzeArray(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return { error: "Invalid input: must be a non-empty array" };
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return { sum, average, min, max };
}

// 5. Asynchronous Function Example

/**
 * Simulates fetching data from an API (with a delay)
 * @param {number} delay - Delay in milliseconds before resolving
 * @returns {Promise<string>} A promise that resolves with mock data
 */
function fetchMockData(delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Mock data fetched after ${delay}ms`);
        }, delay);
    });
}

// Export functions if using ES modules (uncomment if using type="module")
// export { greetUser, addNumbers, changeBackgroundColor, createAndAppendElement,
//          setupDateTimeButton, analyzeArray, fetchMockData };