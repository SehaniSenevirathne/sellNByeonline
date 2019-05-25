package com.sellnby.models;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

 

public class User {

public String register(String email, String password, String firstname, String lastname, String address) {
		
		Connection con = null;
		java.sql.Statement statement = null;
		ResultSet resultSet = null;
		
		String emailDB = "";
		String passwordDB = "";
		String firstnameDB = "";
		String lastnameDB = "";
		String addressDB = "";
		
		try {
			con = DBConnection.createConnection();
			statement = con.createStatement();
			resultSet = statement.executeQuery("select nameUsers,passUsers,firstname,lastname,address");
		
			while(resultSet.next()) {
				emailDB = resultSet.getString("nameUsers");
				passwordDB = resultSet.getString("passUsers");
				firstnameDB = resultSet.getString("firstname");
				lastnameDB = resultSet.getString("lastname");
				addressDB = resultSet.getString("address");
				
				if(email.equals(emailDB) && password.equals(passwordDB)) {
					return"SUCCESS";
				}
			}
		
		
	}
		catch(SQLException e) {
			e.printStackTrace();
		}
		return "Invalid user credentials";
		
		}
}
