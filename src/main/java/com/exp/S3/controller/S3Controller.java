package main.java.com.exp.s3.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.services.s3.model.Bucket;

import main.java.com.exp.s3.service.S3AccessorService;

@RestController()
@RequestMapping("/s3")
public class S3Controller {

	@Autowired
	private S3AccessorService s3Service;
	
	@PostMapping("/listBuckets")
	public List<Bucket> listBuckets(){
		return s3Service.listBuckets();
	}
	
}
