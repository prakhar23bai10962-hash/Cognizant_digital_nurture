public class Test {
    public static void main(String[] args) {
        Logger l1 = Logger.getInstance();
        Logger l2 = Logger.getInstance();

        l1.log("Singleton working");
        System.out.println(l1 == l2);
    }
}