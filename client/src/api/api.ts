const BASE_URL = "http://localhost:???/api"; 

// --- Login ---
export async function loginUser(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  return { ok: response.ok, data };
}

