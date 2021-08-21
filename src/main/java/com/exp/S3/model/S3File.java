package main.java.com.exp.s3.model;

public class S3File {

	public enum FileType {
		TEXT("text/plain"), PDF("pdf"), JPG("jpg"), PNG("png");

		private String name;

		FileType(String name) {
			this.name = name;
		}

		public String getName() {
			return this.name;
		}
	}

	private FileType type;
	private String contents;
	private boolean viewableInBrowser = false;

	public FileType getType() {
		return type;
	}

	public void setType(String type) {

		switch (type) {
		case "text/plain":
			this.type = FileType.TEXT;
			this.viewableInBrowser = true;
			break;
		/*need to upload a value to make sure we know what AWS is calling these file types. 
			Wonder if I can get the metadata type straight from AWS, remove the type and plug in 
			just viewable in browser?
			hmmm might remove this once I get farther along, but also might be useful for 
			rendering. TBD. 
			TODO: determine what I want to do here. 
		*/
		case "pdf": 
			this.type = FileType.PDF;
			this.viewableInBrowser = true;
			break;
		case "jpg":
			this.type = FileType.PNG;
			this.viewableInBrowser = true;
			break;
		case "png":
			this.type = FileType.JPG;
			this.viewableInBrowser = true;
			break;
		//In this case we have no idea what it is dont show in browser. 
		default:
			type = null;
			break;
		}
	}

	//Might not be string, but might base64 encode so I can plug and play images. 
	//TODO: determine if this is right. 
	public String getContents() {
		return contents;
	}

	public void setContents(String contents) {
		this.contents = contents;
	}

	public boolean getViewableInBrowser() {
		return viewableInBrowser;
	}

	public void setViewableInBrowser(boolean viewableInBrowser) {
		this.viewableInBrowser = viewableInBrowser;
	}

}
