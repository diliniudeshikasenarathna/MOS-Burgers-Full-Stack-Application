package edu.icet.ecom.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class Customer {
    private Long id;
    private String name;
    private String contactNo;
    private Double loyaltyPoints;
    private String preferences;
}
