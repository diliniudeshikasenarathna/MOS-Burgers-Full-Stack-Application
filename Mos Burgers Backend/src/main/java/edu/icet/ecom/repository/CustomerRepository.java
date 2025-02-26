package edu.icet.ecom.repository;

import edu.icet.ecom.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<CustomerEntity,Long> {
    List<CustomerEntity> findAllByName(String name);

    List<CustomerEntity> findAllByContactNo(String contactNo);

    void deleteByContactNo(String contactNo);
}
