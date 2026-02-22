
# Lotto Number Generator

## Overview

This project is a simple, visually appealing web application to generate random lotto numbers. It's built with modern, framework-less web technologies (HTML, CSS, JavaScript) and emphasizes a clean, mobile-first design with modern UI aesthetics.

## Project Outline

### Design and Style (style.css)

*   **Layout:** Centered, single-column layout for simplicity and mobile-friendliness.
*   **Color Palette:** A vibrant and energetic color scheme.
    *   Background: A subtle noise texture over a dark gradient.
    *   Primary/Accent Color: A bright, engaging color for buttons and highlights.
    *   Text: Clean, readable white and off-white colors.
*   **Typography:** Expressive and clear fonts.
    *   Hero text for the title.
    *   Clear, large font for the generated numbers.
*   **Components:**
    *   **Header:** Contains the main title of the application.
    *   **Main Section:** A "card" for displaying the generated numbers, lifted with a multi-layered drop shadow.
    *   **Controls:** A primary action button with a "glow" effect on interaction.
    *   **Footer:** For attribution or other information.
*   **Visual Effects:**
    *   **Noise Texture:** A subtle `::before` pseudo-element on the body to create a premium feel.
    *   **Glow/Shadows:** Deep shadows for depth and glowing effects on interactive elements.
    *   **Animations:** A simple animation for the numbers appearing.

### App Logic (main.js)

*   **Functionality:**
    1.  When the "Generate" button is clicked:
    2.  Generate an array of 6 unique random integers between 1 and 45.
    3.  Sort the numbers in ascending order.
    4.  Display the numbers within the designated UI container. Each number will be styled individually.
*   **Code Structure:**
    *   Uses ES Modules (though simple enough not to need them initially).
    *   Event listener attached to the button.
    *   A dedicated function, `generateLottoNumbers()`, for the core logic.
    *   A function, `displayNumbers()`, to update the DOM.

### Structure (index.html)

*   **HTML5 Semantic Tags:** Use of `<header>`, `<main>`, `<footer>`, `<section>`.
*   **Content:**
    *   A clear title (`<h1>`).
    *   A container (`<div class="lotto-card">`) to hold the numbers.
    *   An empty container (`<div class="lotto-numbers">`) to be populated by JavaScript.
    *   The "Generate" button (`<button id="generate-btn">`).
*   **Linking:** Correctly links to `style.css` and `main.js`.

## Current Task: Initial Implementation

1.  **Create `blueprint.md`:** Document the plan. (Done)
2.  **Modify `index.html`:** Set up the basic structure for the lotto number generator.
3.  **Modify `style.css`:** Apply modern styling to the elements defined in the HTML.
4.  **Modify `main.js`:** Implement the JavaScript logic for number generation and display.
