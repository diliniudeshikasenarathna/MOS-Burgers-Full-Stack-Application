package edu.icet.ecom.service;

import edu.icet.ecom.dto.Order;

import java.util.List;

public interface OrderService {
    void addOrder(Order order);

    List<Order> getAll();

    Order searchOrder(Long id);

    void updateOrder(Order order);

    void deleteOrderById(Long id);

    void deleteOrder(Order order);
}
