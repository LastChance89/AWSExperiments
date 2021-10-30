package main.java.com.exp.runnable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectResult;

import main.java.com.exp.util.S3ClientUtil;
import java.io.File;

public class S3ObjectRunnable implements Runnable {

	@Autowired
	private S3ClientUtil s3Client;

	private String bucketName;
	private MultipartFile file;

	private int number;

	public S3ObjectRunnable(String bucketName, MultipartFile file) {
		this.bucketName = bucketName;
		this.file = file;
	}

	@Override
	public void run() {
		try {
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setContentLength(file.getSize());
			PutObjectResult objResult = s3Client.getS3Client().putObject(bucketName, file.getName(),
					file.getInputStream(), metadata);
			System.out.println(objResult.getVersionId());
		}
		// Make me a real boy error.
		catch (Exception e) {
			System.out.println("Failed to upload document to bucket : " + file.getName());
			e.printStackTrace();
		}

	}

	public File convertToFile() {

		return null;
	}

}
