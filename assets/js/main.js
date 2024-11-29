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
const scrollup =() =>{
      const scrollUp = document.getElementById('scroll-up')
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                  : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*========== Scroll section active link ===========*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
      const scrollDown = window.scrollY;

      sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']');

            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                  sectionsClass.classList.add('active-link');
            } else {
                  sectionsClass.classList.remove('active-link');
            }
      });
};
window.addEventListener('scroll', scrollActive);

/*========== Scroll reveal animation ===========*/
