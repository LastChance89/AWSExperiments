package main.java.com.exp.s3.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;

import main.java.com.exp.runnable.S3ObjectRunnable;
import main.java.com.exp.s3.model.S3File;
import main.java.com.exp.s3.service.S3AccessorService;
import main.java.com.exp.util.S3ClientUtil;

@Component
public class S3AccessorServiceImpl implements S3AccessorService {
	private String bucketName = null; 
	
	@Autowired
	private S3ClientUtil s3Client;

	public List<Bucket> listBuckets() {
		return s3Client.getS3Client().listBuckets();
	}

	public List<S3ObjectSummary> getBucketContents(String bucketName) {
		this.bucketName = bucketName;
		return s3Client.getS3Client().listObjectsV2(bucketName).getObjectSummaries();
	}

	public String addFileToBucket(List<MultipartFile> files) {
		
		//Maybe make cached threadpool?
		ExecutorService threadpool = Executors.newFixedThreadPool(5);
		for (MultipartFile mpFile : files) {
			try {
				threadpool.execute(new S3ObjectRunnable(bucketName, mpFile));
			}
			catch(Exception e) {
				//make me a real boy error. 
				return "ERROR";
			}

		}
		
		return "Good to go";

	}

	@Override
	public S3File getBucketObjectContents(Map<String, String> userSelection) {
		S3Object s3Object = s3Client.getS3Client().getObject(userSelection.get("bucketName"),
				userSelection.get("objectName"));
		S3File s3File = new S3File();
		ObjectMetadata meta = s3Object.getObjectMetadata();
		s3File.setType(meta.getRawMetadata().get("Content-Type").toString());
		return null;
	}
	
	@Override 
	public List<String> checkIfFilesExists(String bucketName,List<String> fileNames) {
		this.bucketName = bucketName;
		List<String> existingObjects = new ArrayList<String>();
		for(String file : fileNames) {
			try {
				if(s3Client.getS3Client().doesObjectExist(bucketName, file)) {
					existingObjects.add(file);
				}
			}
			catch(Exception e) {
				e.printStackTrace();
			}
		}
		
		return existingObjects;
	}
	

}
