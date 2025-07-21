package com.example.Tournament.entity;

import java.util.Arrays;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "images")
public class ImageEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String type;
	@Column
	private String SportImageName;
	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[]contain;
	
	
	public ImageEntity() {
	}


	public ImageEntity(String name, String type, String sportImageName, byte[] contain) {
		super();
		this.name = name;
		this.type = type;
		SportImageName = sportImageName;
		this.contain = contain;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getSportImageName() {
		return SportImageName;
	}


	public void setSportImageName(String sportImageName) {
		SportImageName = sportImageName;
	}


	public byte[] getContain() {
		return contain;
	}


	public void setContain(byte[] contain) {
		this.contain = contain;
	}


	@Override
	public String toString() {
		return "ImageEntity [id=" + id + ", name=" + name + ", type=" + type + ", SportImageName=" + SportImageName
				+ ", contain=" + Arrays.toString(contain) + "]";
	}
	
}
