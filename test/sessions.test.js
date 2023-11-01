// sessions.test.js
describe("Sessions", () => {
    it("should create a new session", async () => {
      const user = {
        email: "test@example.com",
        password: "password",
      };
  
      const response = await request(app).post("/sessions").send(user);
  
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("token");
    });
  
    it("should get an existing session", async () => {
      const token = await createSession();
  
      const response = await request(app).get("/sessions/me").set("Authorization", `Bearer ${token}`);
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("email");
    });
  
    it("should delete an existing session", async () => {
      const token = await createSession();
  
      const response = await request(app).delete("/sessions/me").set("Authorization", `Bearer ${token}`);
  
      expect(response.status).toBe(204);
    });
  });
  
  async function createSession() {
    const user = {
      email: "test@example.com",
      password: "password",
    };
  
    const response = await request(app).post("/sessions").send(user);
  
    return response.body.token;
  }
  