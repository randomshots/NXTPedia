function searchItems() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.getElementById("itemList").getElementsByTagName("li");
    let hasResults = false;
  
    for (let i = 0; i < items.length; i++) {
      const item = items[i].textContent || items[i].innerText;
      if (item.toLowerCase().includes(input)) {
        items[i].style.display = "";
        hasResults = true;
      } else {
        items[i].style.display = "none";
      }
    }
  
    // Show the list only if there are relevant results or there's input
    document.getElementById("itemList").classList.toggle("hidden", !hasResults && input === "");
  }
  
  function toggleList(show) {
    const input = document.getElementById("searchInput").value;
    document.getElementById("itemList").classList.toggle("hidden", !show && input === "");
  }
  