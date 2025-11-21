// frontend/utils/refreshToken.js

/**
 * Call the backend /refresh endpoint to get a new access token
 * Returns a Promise that resolves to the new access token
 */
export async function refreshAccessToken() {
  try {
    const response = await fetch("http://localhost:3500/api/refresh", {
      method: "POST",
      credentials: "include", // sends the HttpOnly refreshToken cookie automatically
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Failed to refresh access token");
    }

    const data = await response.json();

    // data should have { accessToken: "..." }
    console.log("New access token:", data.accessToken);
    return data.accessToken;

  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null;
  }
}
