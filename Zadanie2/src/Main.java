import java.io.FileWriter;
import java.io.IOException;

public class Main {
    public static void main (String[] args)
    {
        try{
            FileWriter file = new FileWriter("Text.txt");
            file.write("There is a text");
            file.close();
            System.out.println("\nFile write done");
        } catch (IOException e) {
            System.out.println("There is a problem");
        }
    }
}