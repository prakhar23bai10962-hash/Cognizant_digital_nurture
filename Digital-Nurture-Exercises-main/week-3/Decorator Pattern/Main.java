public class Main {
    public static void main(String[] args) {

        // Base notifier (Email)
        Notifier notifier = new EmailNotifier();

        // Add SMS feature
        notifier = new SMSNotifierDecorator(notifier);

        // Add Slack feature
        notifier = new SlackNotifierDecorator(notifier);

        // Send notification
        notifier.send("Your order has been placed successfully!");
    }
}