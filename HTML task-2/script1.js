const form = document.getElementById('surveyForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const firstTime = document.querySelector('input[name="firstTime"]:checked').value;
    const suggestion = document.querySelector('input[name="suggestion"]:checked').value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const improvement = document.getElementById('improvement').value;

    // Display collected form data
    alert(`
        Name: ${name}
        Email: ${email}
        First Time User: ${firstTime}
        Suggestion: ${suggestion}
        Satisfaction: ${satisfaction}
        Improvement: ${improvement}
    `);

    form.reset();
});
