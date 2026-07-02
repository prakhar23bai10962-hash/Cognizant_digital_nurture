import java.util.HashMap;

public class InventoryManager {

    HashMap<Integer, Product> inventory = new HashMap<>();

    // Add
    public void addProduct(Product p) {
        inventory.put(p.productId, p);
    }

    // Update
    public void updateProduct(int id, int quantity, double price) {
        if (inventory.containsKey(id)) {
            Product p = inventory.get(id);
            p.quantity = quantity;
            p.price = price;
        }
    }

    // Delete
    public void deleteProduct(int id) {
        inventory.remove(id);
    }

    // Display
    public void display() {
        for (Product p : inventory.values()) {
            System.out.println(
                p.productId + " " +
                p.productName + " " +
                p.quantity + " " +
                p.price
            );
        }
    }
}