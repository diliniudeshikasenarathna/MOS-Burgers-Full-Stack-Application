package edu.icet.ecom.controller;

import edu.icet.ecom.dto.Item;
import edu.icet.ecom.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("item")
public class ItemController {
    final ItemService service;

    @PostMapping("/add-item")
    public void addItem(@RequestBody Item item){
        service.addItem(item);


    }

    @GetMapping("/get-all")
    public List<Item> getAll(){
        return service.getAllItem();
    }

    @GetMapping("/search-by-code/{code}")
    public Item searchItem(@PathVariable String code){

        return service.searchItem(code);
    }

    @DeleteMapping("delete-by-code/{code}")
    public void deleteItemByCode(@PathVariable String code){
        service.deletItemByCode(code);

    }



}
