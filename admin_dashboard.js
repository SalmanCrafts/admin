function showDetails(type) {
  document.getElementById("welcome").style.display = "none";
  const userCard = document.getElementById("userDetails");
  const ngoCard = document.getElementById("ngoDetails");

  if (type === "user") {
    userCard.classList.remove("hidden");
    ngoCard.classList.add("hidden");
  } else if (type === "ngo") {
    ngoCard.classList.remove("hidden");
    userCard.classList.add("hidden");
  }
}
