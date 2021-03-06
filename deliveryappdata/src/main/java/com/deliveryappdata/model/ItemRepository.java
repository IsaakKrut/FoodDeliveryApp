package com.deliveryappdata.model;

import com.deliveryappdata.beans.Item;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;



@RepositoryRestResource
public interface ItemRepository extends CrudRepository<Item, Integer>{
    Item findById(@Param("itemId") int id);
}
