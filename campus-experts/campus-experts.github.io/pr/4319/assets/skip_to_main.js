document.addEventListener('click', function (event) {
  if (!event.target.matches('.js-skip-to-content')) return;

  // Without preventDefault the user might experience the default tab behavior first
  // and move to the next item in the normal tab order. Instead, we want set the next
  // tab item to the main content and move to that. preventDefault can cause unintended
  // behavior for keyboard and screen reader users, but in this case we're setting the behavior
  // we want for those users.
  event.preventDefault();
  const startOfContent = document.getElementById('start-of-content');
  if (startOfContent) {
    const nextElement = startOfContent.nextElementSibling;
    if (nextElement instanceof HTMLElement) {
      nextElement.setAttribute('tabindex', '-1');
      nextElement.setAttribute('data-skipped-to-content', '1');
      nextElement.focus();
    }
  }
});
