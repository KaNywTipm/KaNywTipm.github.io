/*========== Email JS ===========*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
      e.preventDefault();

      //serverID - templateID - #form - publicKey
      emailjs.sendForm('service_mh5st14', 'template_6n3z29f', '#contact-form', 'y-5ed3UhrRkRhisUV')
      .then(() => {
            //Send message
            contactMessage.textContent = 'Message sent successfully ✅';

            //Remove message
            setTimeout(() => {
                  contactMessage.textContent = '';
            }, 5000);

            //Clear form
            contactForm.reset();
      }, () => {
            //show error message
            contactMessage.textContent = 'Error message❌';
      });
};

contactForm.addEventListener('submit', sendEmail);

/*========== Show scroll up ===========*/

/*========== Scroll section active link ===========*/

/*========== Scroll reveal animation ===========*/
