package main.java.com.exp.util;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Component
public class S3ClientUtil {
	
	@Autowired
	private PropertiesUtil prop;
	
	private AmazonS3 s3Client;
	
	@PostConstruct
	public void setupClientUtilOnStartup() {
		//Check to make sure that both the required properties are set
		if(!prop.getAccess().isBlank() && !prop.getSecret().isBlank()) {
			setupS3Client();
		}
	}
	
	//We setup the S3Client here so if we want to modify the AWS access / secret to another 
	//AWS instance or Credential set we can. 
	public void setupS3Client() {
		AWSCredentials cred = new BasicAWSCredentials(
				prop.getAccess(),
				prop.getSecret());
		s3Client = AmazonS3ClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(cred))
				.withRegion("us-east-2").build();
	}
		
	public AmazonS3 getS3Client() {
		return s3Client;
	}
	
	
}
