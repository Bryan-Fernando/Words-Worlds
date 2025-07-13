export function middleware(req) {
  const BASIC_AUTH_USER = "C0urse";
  const BASIC_AUTH_PASS = "3ngPQsi*@";

  const authHeader = req.headers.get("authorization");

  if (authHeader) {
    
    const encoded = authHeader.split(" ")[1];
    const [user, pass] = Buffer.from(encoded, "base64").toString().split(":");

    if (user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASS) {
      return; 
    }
  }
  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected Area"',
    },
  });
}
