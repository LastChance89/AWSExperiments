package main.java.com.exp.s3.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.S3ObjectSummary;

import main.java.com.exp.s3.model.S3File;

public interface S3AccessorService {
	public List<Bucket> listBuckets();
	public void addFileToBucket(List<MultipartFile> files);
	public List<S3ObjectSummary> getBucketContents(String bucketName);
	public S3File getBucketObjectContents(Map<String,String> userSelection);
}
