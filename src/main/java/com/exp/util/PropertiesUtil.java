package main.java.com.exp.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class PropertiesUtil {

	private Properties prop = new Properties();
	public void setupApplicationPropertiesFromFile() {
		try {
			prop.load( new FileInputStream(
					Thread.currentThread().getContextClassLoader().getResource("application.properties").getFile()));
		} catch (IOException e) {
			System.out.println("File not found");
			e.printStackTrace();
		}
	}
	
	public String getAccess() {
		return prop.get("aws.access").toString();
	}

	public String getSecret() {
		return prop.get("aws.secret").toString();
	}
	
}
