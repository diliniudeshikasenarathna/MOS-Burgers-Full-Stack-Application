package edu.icet.ecom.service.impl;

import edu.icet.ecom.dto.Order;
import edu.icet.ecom.entity.OrderEntity;
import edu.icet.ecom.repository.OrderRepository;
import edu.icet.ecom.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@RequiredArgsConstructor

public class OrderServiceImpl implements OrderService {
    final OrderRepository repository;
    final ModelMapper mapper;
    @Override
    public void addOrder(Order order) {
        repository.save(mapper.map(order, OrderEntity.class));

    }

    @Override
    public List<Order> getAll() {
        List<Order> orderList=new ArrayList<>();
        List<OrderEntity> all = repository.findAll();
        all.forEach(orderEntity -> orderList.add(mapper.map(orderEntity, Order.class)));

        return orderList;

    }

    @Override
    public Order searchOrder(Long id) {
        return mapper.map(repository.findById(id), Order.class);

    }

    @Override
    public void updateOrder(Order order) {
        repository.save(mapper.map(order, OrderEntity.class));
    }

    @Override
    public void deleteOrderById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void deleteOrder(Order order) {
        repository.delete(mapper.map(order, OrderEntity.class));
    }
}
