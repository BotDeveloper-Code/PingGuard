const API_BASE = "https://51e385fc-6e30-48eb-b44b-e566e3dfe207-00-1fdvzki36v1il.kirk.replit.dev";

document.getElementById("submit-form").addEventListener("click", async () => {
  const protectedId = document.getElementById("protected-id").value;
  const exemptId = document.getElementById("exempt-id").value;

  const res = await fetch(`${API_BASE}/api/save-settings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      protected_user: protectedId,
      exempt_user: exemptId
    })
  });

  const result = await res.json();
  alert(result.message);
});
