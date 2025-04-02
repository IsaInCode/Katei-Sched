document.getElementById('profilePic').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePreview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function saveChanges() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const bio = document.getElementById('userBio').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword && newPassword !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    alert('Alterações salvas com sucesso!');
}

function resetForm() {
    document.getElementById('editProfileForm').reset();
    document.getElementById('profilePreview').src = "https://via.placeholder.com/150";
}
