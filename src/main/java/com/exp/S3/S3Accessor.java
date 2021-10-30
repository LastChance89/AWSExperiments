package main.java.com.exp.s3;

import java.io.File;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.amazonaws.services.s3.model.S3ObjectSummary;

import main.java.com.exp.util.PropertiesUtil;
public class S3Accessor {
	
	
	public static void main(String[] args) {
		Double x =  0.000001;
		Double y = 0.000001;
		System.out.println(x-y);
	}
	
/*
	@Autowired
	PropertiesUtil prop;
	public static void main(String[] args) {

		
		AWSCredentials cred = new BasicAWSCredentials(
				prop.getAccess(),
				prop.getSecret());

		AmazonS3 s3Client = AmazonS3ClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(cred))
				.withRegion("us-east-2").build();
		
		
		List<Bucket> buckets = s3Client.listBuckets();
		for (Bucket bucket : buckets) {
			if(!bucket.getName().contains("elasticbeanstalk")) {
				System.out.println(bucket.getName() + "" + bucket.getOwner());
			}

		}
		ListObjectsV2Result result = s3Client.listObjectsV2("ksmitwtesting");
		for(S3ObjectSummary sum: result.getObjectSummaries()) {
			System.out.println(sum.getKey());
		}
		
		addFileToBucket(s3Client,"D:\\ProgramingSampleDocs\\aws_sample_docs\\TestUpload.txt");
	}
	
	public static void addFileToBucket(AmazonS3 s3Client, String fileLocation) {
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
	*/
	

}
