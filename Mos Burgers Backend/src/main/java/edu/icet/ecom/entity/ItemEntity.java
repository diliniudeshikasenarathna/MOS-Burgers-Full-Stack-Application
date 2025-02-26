package edu.icet.ecom.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name="item")
public class ItemEntity {

    @Id
    String code;
    String name;
    Double price;
    Integer discount;
    String category;
    Integer qty;
    LocalDate expireDate;
}
