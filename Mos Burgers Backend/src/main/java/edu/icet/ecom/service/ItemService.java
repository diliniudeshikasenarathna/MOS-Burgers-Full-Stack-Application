package edu.icet.ecom.service;

import edu.icet.ecom.dto.Item;

import java.util.List;

public interface ItemService {
    void addItem(Item item);

    List<Item> getAllItem();

    Item searchItem(String code);

    void deletItemByCode(String code);

    List<Item> searchItemsByCategory(String category);

    List<Item> searchItemByName(String name);

    void updateItem(Item item);
}


