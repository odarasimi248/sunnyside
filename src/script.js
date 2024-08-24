const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('successModal');
  const closeModalButton = document.getElementById('closeModal');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting

      // Display the modal
      modal.classList.remove('hidden');

      form.reset();
  });

  closeModalButton.addEventListener('click', function () {
      // Hide the modal
      modal.classList.add('hidden');
  });
});
