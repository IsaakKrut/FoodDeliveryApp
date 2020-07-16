package com.deliveryappdata.model;

import java.util.List;

import com.deliveryappdata.beans.OrderItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface OrderItemRepository extends CrudRepository<OrderItem, Integer>{

    List<OrderItem> findByOrderId(@Param("orderId") int orderId);
};
