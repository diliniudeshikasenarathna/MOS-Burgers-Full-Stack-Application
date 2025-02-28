package edu.icet.ecom.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.util.List;


@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class Order {

    private Long id;
    private List<String> itemList;
    private Double total;
    private String  customerPhoneNo;
}
