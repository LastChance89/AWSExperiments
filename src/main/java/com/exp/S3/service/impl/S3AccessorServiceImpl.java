package main.java.com.exp.s3.service.impl;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.amazonaws.services.s3.model.S3ObjectSummary;

import main.java.com.exp.s3.service.S3AccessorService;
import main.java.com.exp.util.S3ClientUtil;

@Component
public class S3AccessorServiceImpl implements S3AccessorService {
	/*
	 * @Autowired PropertiesUtil prop;
	 */
	
	@Autowired 
	private S3ClientUtil s3Client;
	
	
	
	public List<Bucket> listBuckets(){
		/*
		AWSCredentials cred = new BasicAWSCredentials(
				prop.getAccess(),
				prop.getSecret());

		AmazonS3 s3Client = AmazonS3ClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(cred))
				.withRegion("us-east-2").build();
		*/
		return s3Client.getS3Client().listBuckets();
	}
	

	public List<S3ObjectSummary> getBucketContents(String bucketName){
		return s3Client.getS3Client().listObjectsV2(bucketName).getObjectSummaries();
	}
	
	public void addFileToBucket(AmazonS3 s3Client, String fileLocation) {
		//String bucketName, String key, File file
		File file = new File(fileLocation);
		try {
			//Save bucket name to properties file?Nah can get that straight from 
			//AWS I think. 
			PutObjectResult objResult = s3Client.putObject("ksmitwtesting", file.getName(), file);
			System.out.println(objResult.getVersionId());
		}
		//Make me a real boy error. 
		catch(Exception e) {
			System.out.println("Failed to upload document to bucket");
			e.printStackTrace();
		}
	}
	
	
}
