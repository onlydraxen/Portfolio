// Smooth Scroll
document.querySelectorAll('.link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      console.error(`Target section with ID "${targetId}" not found.`);
    }
  });
});


const home = document.querySelector('.home');
const count = 5;

const createLight = () => {
  const lighting = document.createElement('div');
  lighting.classList.add('lighting');

  const size = `${Math.random() * 100 + 100}px`;
  lighting.style.width = size;
  lighting.style.height = size;

  lighting.style.top = `${Math.random() * 100}%`;
  lighting.style.left = `${Math.random() * 100}%`;

  lighting.style.animationDelay = `${Math.random() * 5}s`;
  lighting.style.animationDuration = `${Math.random() * 10 + 2}s`;

  return lighting;
};

if (home) {
  for (let i = 0; i < count; i++) {
    home.appendChild(createLight());
  }
} else {
  console.error("Element with class 'home' not found.");
}

// Sign-in popup functionality
const loginBtn = document.querySelector('#login');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup .close-btn');
const blurOverlay = document.querySelector('.blur-overlay');  
const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');
const switchToSignup = document.querySelector('.switch-to-signup');
const switchToSignin = document.querySelector('.switch-to-signin');


loginBtn.addEventListener('click', () => {
  popup.classList.add('active');
  blurOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; 
});

// Close popup
const closePopup = () => {
  popup.classList.remove('active');
  blurOverlay.classList.remove('active');
  document.body.style.overflow = 'auto'; 
  
 
  setTimeout(() => {
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
    signInForm.classList.remove('slide-out', 'slide-in');
    signUpForm.classList.remove('slide-out', 'slide-in');
  }, 400);
};

closeBtn.addEventListener('click', closePopup);
blurOverlay.addEventListener('click', closePopup);



const switchForms = (toShow, toHide) => {

  toHide.classList.add('slide-out');
  
  setTimeout(() => {
    toHide.style.display = 'none';
    toHide.classList.remove('slide-out');
    


    toShow.style.display = 'block';
    toShow.classList.add('slide-in');
    


    setTimeout(() => {
      toShow.classList.remove('slide-in');
    }, 400);
  }, 300);
};

switchToSignup.addEventListener('click', (e) => {
  e.preventDefault();
  switchForms(signUpForm, signInForm);
});

switchToSignin.addEventListener('click', (e) => {
  e.preventDefault();
  switchForms(signInForm, signUpForm);
});



const handleSubmit = (e, formType) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  console.log(`${formType} form submitted:`, data);
  


  closePopup();
  form.reset();
};

signInForm.addEventListener('submit', (e) => handleSubmit(e, 'Sign In'));
signUpForm.addEventListener('submit', (e) => handleSubmit(e, 'Sign Up'));


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    closePopup();
  }
});



const inputs = document.querySelectorAll('.form-element input');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', () => {
    if (!input.value) {
      input.parentElement.classList.remove('focused');
    }
  });
});



const buttons = document.querySelectorAll('.form-element button');

buttons.forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.98)';
  });
  
  button.addEventListener('mouseup', () => {
    button.style.transform = '';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
  });
});
