let participantCount = 1;

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}">First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
        <label for="date${count}">Desired Date<span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" />
      </div>
    </section>
  `;
}

const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
  participantCount++; 
  addButton.insertAdjacentHTML('beforebegin', participantTemplate(participantCount));
});

function totalFees() {

  let feeElements = [...document.querySelectorAll("[id^=fee]")];
  return feeElements.reduce((total, fee) => total + Number(fee.value || 0), 0);
}

function successTemplate(info) {
  return `
    <p>Thank you, ${info.adultName}, for registering.</p>
    <p>You have registered ${info.participantCount} participants and owe $${info.totalFees} in fees.</p>
  `;
}

function submitForm(event) {
  event.preventDefault();

  const totalFeesAmount = totalFees();
  const adultName = document.getElementById('adult_name').value;

  const info = {
    adultName,
    participantCount,
    totalFees: totalFeesAmount,
  };

  document.querySelector('form').style.display = 'none';
  document.getElementById('summary').innerHTML = successTemplate(info);
}

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);
