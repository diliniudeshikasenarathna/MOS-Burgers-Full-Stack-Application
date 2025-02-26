package edu.icet.ecom.dto;

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

public class Item {

    String code;
    String name;
    Double price;
    Integer discount;
    String category;
    Integer qty;
    LocalDate expireDate;
}
