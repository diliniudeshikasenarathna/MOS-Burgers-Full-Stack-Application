package edu.icet.ecom.controller;

import edu.icet.ecom.dto.Order;
import edu.icet.ecom.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/order")
public class OrderController {
    final OrderService service;

    @PostMapping("/add")
    public void createOrder(@RequestBody Order order){
        service.addOrder(order);

    }

    @GetMapping("/get-all")
    public List<Order> getAll(){
        return service.getAll();

    }
    @GetMapping("/search/{id}")
    public Order searchOrder(@PathVariable Long id){
        return service.searchOrder(id);

    }

    @PatchMapping("/update")
    public void updateOrder(@RequestBody Order order){
        service.updateOrder(order);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteOrderById(@PathVariable Long id){
        service.deleteOrderById(id);
    }

    @DeleteMapping("/delete")
    public void deleteOrder(@RequestBody Order order){
        service.deleteOrder(order);
    }
}
