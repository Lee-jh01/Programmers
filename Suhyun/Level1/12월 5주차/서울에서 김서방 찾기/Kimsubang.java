public class Kimsubang {
    public static void main(String[] args) {
        String[] seoul = new String[]{"Jane","eeee","jany", "Kim"};
        String answer = "";
        

        for (int i = 0 ; i < seoul.length ; i++)
        {
            
            if(seoul[i].equals("Kim")){
                answer = "�輭���� "+i+"�� �ִ�";
                //System.out.println(answer);
                break;
            }
        }
         //return answer;
        System.out.println(answer);
        
      


    }
}
