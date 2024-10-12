import java.util.HashSet;
import java.util.Set;

public class PangramCheck {
    public static boolean isPangram(String sentence) {
        
        sentence = sentence.toLowerCase();
        
      
        Set<Character> letters = new HashSet<>();
        
        
        for (char c : sentence.toCharArray()) {
            if (c >= 'a' && c <= 'z') { 
                letters.add(c);
            }
        }

       
        return letters.size() == 26;
    }

    public static void main(String[] args) {

        String input = "abcde fghij klmno pqrst uvwxyz";  
        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is NOT a pangram.");
        }
    }
}
