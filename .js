<script>
  // JavaScript code for handling the search functionality
  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('input[type="text"]');
    const searchButton = document.querySelector('button');

    searchButton.addEventListener("click", function(event) {
     event.preventDefault();
      const searchText = searchInput.value.trim();
      if (searchText !== "") {
        alert("You searched for: " + searchText);
    );
</script>