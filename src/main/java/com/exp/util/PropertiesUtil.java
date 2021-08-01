package main.java.com.exp.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

// Ill change this to a caching mechanism later. For now the 
//post construct to allow it to configure on load is fine. 
@Component
public class PropertiesUtil {

	//move this to database later. good enough for now. 
	private static Properties prop = null;
	
	@PostConstruct
	public void setupApplicationPropertiesFromFile() {
		prop = new Properties();
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
	public void createNewPropertiesFIle() {
		
	}
	
	//Add new properties file for new connection. 
	//TODO.
	public void addNewAWSConnection() {
		
	}
	
	public String getAccess() {
		return prop.get("aws.access").toString();
	}

	public String getSecret() {
		return prop.get("aws.secret").toString();
	}
	
}
