import java.util.HashMap;
import java.util.Map;

public class RomanToInteger {
    public static int romanToInt(String s) {
      
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);

        int result = 0;
        int n = s.length();

     
        for (int i = 0; i < n; i++) {
            int currentVal = romanMap.get(s.charAt(i));

          
            if (i < n - 1 && currentVal < romanMap.get(s.charAt(i + 1))) {
                result -= currentVal; 
                result += currentVal; 
            }
        }

        return result;
    }

    public static void main(String[] args) {
    
        String romanNumeral = "IX";  
        int result = romanToInt(romanNumeral);
        System.out.println("The integer value of " + romanNumeral + " is: " + result);
    }
}
