function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);

    if (!dobInput || dob > new Date()) {
        document.getElementById('result').innerText = 'Please enter a valid date of birth.';
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}
