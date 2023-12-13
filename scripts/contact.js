/********* when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font. *********/
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

submitButton.addEventListener('click', () => {
    contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';
});