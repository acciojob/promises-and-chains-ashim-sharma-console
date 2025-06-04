//your JS code here. If required.
 const form = document.getElementById('votingForm');
    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const age = ageInput.value.trim();
      const name = nameInput.value.trim();

      if (!age || !name) {
        alert("Please enter valid details.");
        return;
      }

      // Create a promise that resolves or rejects based on age after 4 seconds
      const checkAgePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Number(age) > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      checkAgePromise
        .then(message => alert(message))
        .catch(message => alert(message));
    });