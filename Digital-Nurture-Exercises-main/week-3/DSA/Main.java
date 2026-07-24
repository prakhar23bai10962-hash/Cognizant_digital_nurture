public class Main {

    public static void printOrders(Order[] orders) {
        for (Order o : orders) {
            o.display();
        }
        System.out.println();
    }

    public static void main(String[] args) {

        Order[] orders = {
            new Order(1, "Prakhar", 2500),
            new Order(2, "Amit", 1200),
            new Order(3, "Neha", 3200),
            new Order(4, "Raj", 800)
        };

        System.out.println("Original Orders:");
        printOrders(orders);

        // Bubble Sort
        BubbleSort.sort(orders);
        System.out.println("After Bubble Sort:");
        printOrders(orders);

        // Quick Sort
        QuickSort.sort(orders, 0, orders.length - 1);
        System.out.println("After Quick Sort:");
        printOrders(orders);
    }
}