package edu.icet.ecom.entity;

import edu.icet.ecom.dto.Item;
import edu.icet.ecom.dto.OrdersList;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="orders")
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @CollectionTable(name = "order_items", joinColumns = @JoinColumn(name = "order_id"))
    @Column(name = "item")
    private List<String> itemList;
    private Double total;
    private String  customerPhoneNo;
}
