package mmm.security;


public class TestDriver {
	UserInfo users = new UserInfo();

	public TestDriver(){
		
		testUser("Peter","pan");
		testUser("Peter","Pan");
		testUser("betty","b4711");
		testUser("Hank","Marvin");
		testUser("Hank","Williams");
		
   
	}
	public void testUser(String name, String code){
		if (users.userExists(name, code)){
			System.out.println("user: " + name + " Code: " + code +
					" exists");
		}
			else
			{ 
				System.out.println("user: " + name + " Code: " + code +
			" does NOT exist");
			}
	}

		
		
	
public static void main(String [] args){
	
	new TestDriver();
}
}
