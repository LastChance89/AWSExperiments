package main.java.com.exp.S3;

import java.io.FileInputStream;
import java.util.List;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.Bucket;

import main.java.com.exp.util.PropertiesUtil;
public class S3Accessor {


	public static void main(String[] args) {
		/*
		 * Set me up with autowiring if I ever go past just messing around with AWS SDK. 
		 */
		PropertiesUtil prop = new PropertiesUtil(); 
		prop.setupApplicationPropertiesFromFile();
		
		AWSCredentials cred = new BasicAWSCredentials(
				prop.getAccess(),
				prop.getSecret());

		AmazonS3 s3Client = AmazonS3ClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(cred))
				.withRegion("us-east-1").build();
		List<Bucket> buckets = s3Client.listBuckets();
		for (Bucket bucket : buckets) {
			System.out.println(bucket.getName() + "" + bucket.getOwner());
		}

	}

}
