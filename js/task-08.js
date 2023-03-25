const form = document.querySelector(".login-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    if (email.length === 0 || password.length === 0) {
      alert('Todos los espacios deben ser rellenados');
    } else {
      const formData = {
        email,
        password
      };
      
      console.log(formData);
      
      form.reset();
    }
  });
 
  
  
  