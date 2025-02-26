package edu.icet.ecom.repository;

import edu.icet.ecom.entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<ItemEntity,String> {

    List<ItemEntity> findByName(String name);

    List<ItemEntity> findByCategory(String category);
}
