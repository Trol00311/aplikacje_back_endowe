import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String text = " First Line \r\n Secon Line \r Third Line";
        String[] lines = text.lines().toArray(String[]::new);
        System.out.println(Arrays.toString(lines));

        Scanner odczyt = new Scanner(System.in);

        for(int i=0; i< lines.length;i++) {
            System.out.println(i+1 + ". " + lines[i]);
        }
    }
}