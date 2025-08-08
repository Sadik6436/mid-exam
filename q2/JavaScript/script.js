 const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(target).classList.add('active');
      });
    });



const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Optional: close others
    document.querySelectorAll('.accordion-content').forEach(item => {
      if (item !== content) item.classList.remove('active');
    });

    // Toggle current
    content.classList.toggle('active');
  });
});

(function () {
  const clockEl = document.getElementById('clock');

  function pad(number) {
    // ensures two digits (e.g. 03)
    return number < 10 ? '0' + number : String(number);
  }

  function to12Hour(hour24) {
    // convert 24-hour to 12-hour with 12 for midnight/noon
    const hour = hour24 % 12;
    return hour === 0 ? 12 : hour;
  }

  function getAmPm(hour24) {
    return hour24 >= 12 ? 'PM' : 'AM';
  }

  function updateClock() {
    const now = new Date();

    const h24 = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const h12 = to12Hour(h24);
    const ampm = getAmPm(h24);

    // build display string with leading zeros
    const display = `${pad(h12)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;

    clockEl.textContent = display;
  }

  // start immediately so user doesn't see "00:00:00" for a second
  updateClock();

  // update every second (1000ms)
  setInterval(updateClock, 1000);
})();