package main.java.com.exp.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.springframework.stereotype.Component;

// Need to refactor this class. 
public class PropertiesUtil {

	//move this to database later. good enough for now. 
	private static Properties prop = new Properties();
	//This should be handled and cached by ehcache. 
	public void setupApplicationPropertiesFromFile() {
		try {
			prop.load( new FileInputStream(
					Thread.currentThread().getContextClassLoader().getResource("application.properties").getFile()));
		} catch (IOException e) {
			System.out.println("File not found");
			e.printStackTrace();
		}
	}
	//Create new properties file
	//TODO
	public static void createNewPropertiesFIle() {
		
	}
	
	//Add new properties file for new connection. 
	//TODO.
	public static void addNewAWSConnection() {
		
	}
	
	public static String getAccess() {
		return prop.get("aws.access").toString();
	}

	public static String getSecret() {
		return prop.get("aws.secret").toString();
	}
	
}
