package edu.icet.ecom.controller;

import edu.icet.ecom.dto.Customer;
import edu.icet.ecom.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/customer")
public class CustomerController {
    final CustomerService service;

    @PostMapping("/add-customer")
    public void addCustomer(@RequestBody Customer customer){
        service.addCustomer(customer);

    }

    @GetMapping("/get-all")
    public List<Customer> getAll(){
        return service.getAllCustomers();
    }

    @GetMapping("/get-by-name/{name}")
    public List<Customer> searchByName(@PathVariable String name){
        return  service.searchCustomerByName(name);
    }

    @GetMapping("/get-by-contactNo/{contactNo}")
    public List<Customer> searchByContactNo(@PathVariable String contactNo){
        return  service.searchByContactNo(contactNo);
    }

    @DeleteMapping("/delete-customer")
    public void deleteCustomer(@RequestBody Customer customer){
        service.deletCustomer(customer);
    }

    @PatchMapping("update-customer")
    public void UpdateCustomer(@RequestBody Customer customer){
        service.updateCustomer(customer);
    }
}
