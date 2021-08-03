package main.java.com.exp.s3.service;

import java.util.List;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.Bucket;

public interface S3AccessorService {
	public List<Bucket> listBuckets();
	public void addFileToBucket(AmazonS3 s3Client, String fileLocation);
	public List<String> viewItemsInBucket(String bucketName);
}
