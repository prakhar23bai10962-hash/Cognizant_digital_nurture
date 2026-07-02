public class Main {
    public static void main(String[] args) {

        // Basic Computer
        Computer basicComputer = new Computer.Builder("Intel i5", "8GB")
                .setStorage("512GB SSD")
                .build();

        basicComputer.showConfiguration();

        // Gaming Computer
        Computer gamingComputer = new Computer.Builder("Intel i9", "16GB")
                .setStorage("1TB SSD")
                .setGraphicsCard("NVIDIA RTX 4070")
                .setOperatingSystem("Windows 11")
                .build();

        gamingComputer.showConfiguration();

        // Office Computer
        Computer officeComputer = new Computer.Builder("AMD Ryzen 5", "8GB")
                .setOperatingSystem("Windows 10")
                .build();

        officeComputer.showConfiguration();
    }
}