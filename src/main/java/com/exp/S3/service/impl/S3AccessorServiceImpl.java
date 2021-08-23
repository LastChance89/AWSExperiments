package main.java.com.exp.s3.service.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.model.Bucket;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;

import main.java.com.exp.s3.model.S3File;
import main.java.com.exp.s3.service.S3AccessorService;
import main.java.com.exp.util.S3ClientUtil;

@Component
public class S3AccessorServiceImpl implements S3AccessorService {
	@Autowired
	private S3ClientUtil s3Client;

	public List<Bucket> listBuckets() {
		return s3Client.getS3Client().listBuckets();
	}

	public List<S3ObjectSummary> getBucketContents(String bucketName) {
		return s3Client.getS3Client().listObjectsV2(bucketName).getObjectSummaries();
	}

	public void addFileToBucket(List<MultipartFile> files) {
		// String bucketName, String key, File file
		// File file = new File(files.get(0).getName());
		List<File> filesToUpload = new ArrayList<File>();
		for (MultipartFile mpFile : files) {
			File file = new File(mpFile.getName());
			filesToUpload.add(file);

		}
		try {
			// PutObjectResult objResult = s3Client.putObject("ksmitwtesting",
			// file.getName(), file);
			// System.out.println(objResult.getVersionId());
		}
		// Make me a real boy error.
		catch (Exception e) {
			System.out.println("Failed to upload document to bucket");
			e.printStackTrace();
		}
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

}
