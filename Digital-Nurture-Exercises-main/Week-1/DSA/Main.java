public class Main {
    public static void main(String[] args) {

        InventoryManager im = new InventoryManager();

        im.addProduct(new Product(101, "Laptop", 5, 50000));
        im.addProduct(new Product(102, "Phone", 10, 20000));
        im.addProduct(new Product(103, "Mouse", 20, 500));

        System.out.println("Initial Inventory:");
        im.display();

        im.updateProduct(101, 3, 48000);

        im.deleteProduct(102);

        System.out.println("\nFinal Inventory:");
        im.display();
    }
}