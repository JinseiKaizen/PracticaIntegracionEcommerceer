// carts.test.js
describe("Carts", () => {
    it("should create a new cart", async () => {
      const cart = {
        products: [],
      };
  
      const response = await request(app).post("/carts").send(cart);
  
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("products");
    });
  
    it("should get an existing cart", async () => {
      const cart = await request(app).get("/carts/1");
  
      expect(cart.status).toBe(200);
      expect(cart.body).toHaveProperty("id");
      expect(cart.body).toHaveProperty("products");
    });
  
    it("should add a product to an existing cart", async () => {
      const cart = {
        id: 1,
        products: [],
      };
      const product = {
        id: 1,
        name: "Test Product",
        description: "This is a test product",
        price: 100,
      };
  
      const response = await request(app).post("/carts/1/products").send(product);
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("products");
      expect(response.body.products).toHaveLength(1);
    });
  });
  