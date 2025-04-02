document.getElementById('search').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
  
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const matches = Array.from(cells).some(cell => 
        cell.textContent.toLowerCase().includes(filter)
      );
  
      row.style.display = matches ? '' : 'none';
    });
  });

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('collapsed');
        }

const deleteButton = document.querySelector(".delete-reservation-btn");

deleteButton.addEventListener("click", () => {

  const selectedRows = document.querySelectorAll(".select-row:checked");

  if (selectedRows.length === 0) {
    alert("Nenhuma reserva selecionada para exclusão.");
    return;
  }

  const confirmDelete = confirm("Tem certeza que deseja excluir as reservas selecionadas?");
  if (!confirmDelete) return;

  selectedRows.forEach((checkbox) => {
    const row = checkbox.closest("tr");
    row.remove();
  });

  alert("Reservas excluídas com sucesso!");
});

  
