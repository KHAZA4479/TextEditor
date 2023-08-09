const boldButton = document.getElementById('bold-button');
const italicButton = document.getElementById('italic-button');
const underlineButton = document.getElementById('underline-button');
const fontSizeSelect = document.getElementById('font-size-select');
const colorInput = document.getElementById('color-input');
const saveButton = document.getElementById('save-button');
const loadButton = document.getElementById('load-button');
const textArea = document.querySelector('.text-area');

boldButton.addEventListener('click', () => {
    document.execCommand('bold', false, null);
});

italicButton.addEventListener('click', () => {
    document.execCommand('italic', false, null);
});

underlineButton.addEventListener('click', () => {
    document.execCommand('underline', false, null);
});

fontSizeSelect.addEventListener('change', () => {
    const fontSize = fontSizeSelect.value;
    document.execCommand('fontSize', false, fontSize);
});

colorInput.addEventListener('input', () => {
    const color = colorInput.value;
    document.execCommand('foreColor', false, color);
});

saveButton.addEventListener('click', () => {
    const content = textArea.innerHTML;
    localStorage.setItem('editor-content', content);
    alert('Content saved successfully.');
});

loadButton.addEventListener('click', () => {
    const savedContent = localStorage.getItem('editor-content');
    if (savedContent) {
        textArea.innerHTML = savedContent;
        alert('Content loaded successfully.');
    } else {
        alert('No saved content found.');
    }
});
