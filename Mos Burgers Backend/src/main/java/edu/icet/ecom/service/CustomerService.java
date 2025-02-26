package edu.icet.ecom.service;

import edu.icet.ecom.dto.Customer;

import java.util.List;

public interface CustomerService {
    void addCustomer(Customer customer);

    List<Customer> getAllCustomers();

    List<Customer> searchCustomerByName(String name);

    List<Customer> searchByContactNo(String contactNo);

    void deletCustomer(Customer customer);

    void updateCustomer(Customer customer);
}
