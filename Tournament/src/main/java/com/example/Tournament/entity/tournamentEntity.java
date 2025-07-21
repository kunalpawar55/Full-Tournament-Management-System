package com.example.Tournament.entity;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@jakarta.persistence.Entity
@Table
public class tournamentEntity {
    
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column
	private String Sport_Name;
	@Column
	private String Date;
	@Column
	private String Reportin_Time;
	@Column
	private long First_Prize;
	@Column
	private long Second_prize;
	@Column
	private long Third_prize;
	@Column
	private long Contact_number;
	@Column
	private String Adress;
    @Column
    private double EntryFrres;
    @Column
    private String Description;
    @Column
    private int age;
    @Column
    private int Weight;
    @Column 
    private String Location;
    
    public tournamentEntity() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSport_Name() {
		return Sport_Name;
	}

	public void setSport_Name(String sport_Name) {
		Sport_Name = sport_Name;
	}

	public String getDate() {
		return Date;
	}

	public void setDate(String date) {
		Date = date;
	}

	public String getReportin_Time() {
		return Reportin_Time;
	}

	public void setReportin_Time(String reportin_Time) {
		Reportin_Time = reportin_Time;
	}

	public long getFirst_Prize() {
		return First_Prize;
	}

	public void setFirst_Prize(long first_Prize) {
		First_Prize = first_Prize;
	}

	public long getSecond_prize() {
		return Second_prize;
	}

	public void setSecond_prize(long second_prize) {
		Second_prize = second_prize;
	}

	public long getThird_prize() {
		return Third_prize;
	}

	public void setThird_prize(long third_prize) {
		Third_prize = third_prize;
	}

	public long getContact_number() {
		return Contact_number;
	}

	public void setContact_number(long contact_number) {
		Contact_number = contact_number;
	}

	public String getAdress() {
		return Adress;
	}

	public void setAdress(String adress) {
		Adress = adress;
	}

	public double getEntryFrres() {
		return EntryFrres;
	}

	public void setEntryFrres(double entryFrres) {
		EntryFrres = entryFrres;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getWeight() {
		return Weight;
	}

	public void setWeight(int weight) {
		Weight = weight;
	}

	public String getLocation() {
		return Location;
	}

	public void setLocation(String location) {
		Location = location;
	}

	@Override
	public String toString() {
		return "tournamentEntity [id=" + id + ", Sport_Name=" + Sport_Name + ", Date=" + Date + ", Reportin_Time="
				+ Reportin_Time + ", First_Prize=" + First_Prize + ", Second_prize=" + Second_prize + ", Third_prize="
				+ Third_prize + ", Contact_number=" + Contact_number + ", Adress=" + Adress + ", EntryFrres="
				+ EntryFrres + ", Description=" + Description + ", age=" + age + ", Weight=" + Weight + ", Location="
				+ Location + "]";
	}

	public tournamentEntity(String sport_Name, String date, String reportin_Time, long first_Prize, long second_prize,
			long third_prize, long contact_number, String adress, double entryFrres, String description, int age,
			int weight, String location) {
		super();
		Sport_Name = sport_Name;
		Date = date;
		Reportin_Time = reportin_Time;
		First_Prize = first_Prize;
		Second_prize = second_prize;
		Third_prize = third_prize;
		Contact_number = contact_number;
		Adress = adress;
		EntryFrres = entryFrres;
		Description = description;
		this.age = age;
		Weight = weight;
		Location = location;
	}
	 private void tournamentEntit() {
		// TODO Auto-generated method stub

	}
}