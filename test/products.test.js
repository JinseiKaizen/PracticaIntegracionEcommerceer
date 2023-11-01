// products.test.js

describe("Products", () => {
    it("should create a new product", async () => {
      const product = {
        name: "Test Product",
        description: "This is a test product",
        price: 100,
      };
  
      const response = await request(app).post("/products").send(product);
  
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("description");
      expect(response.body).toHaveProperty("price");
    });
  
    it("should get a product by ID", async () => {
      const product = await request(app).get("/products/1");
  
      expect(product.status).toBe(200);
      expect(product.body).toHaveProperty("id");
      expect(product.body).toHaveProperty("name");
      expect(product.body).toHaveProperty("description");
      expect(product.body).toHaveProperty("price");
    });
  
    it("should update a product", async () => {
      const product = {
        id: 1,
        name: "Updated Product",
        description: "This is an updated product",
        price: 200,
      };
  
      const response = await request(app).put("/products/1").send(product);
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("description");
      expect(response.body).toHaveProperty("price");
    });
  });
  