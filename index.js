document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector("#text")
    textElement.textContent = "This is really cool!"
    console.log  ('The DOM has loaded');
});
console.log('After DOM loads');