package com.deliveryappdata.model;

import java.util.List;

import com.deliveryappdata.beans.Order;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface OrderRepository extends CrudRepository<Order, Integer>{

    List<Order> findByEmail(@Param("email") String email);
    
}
