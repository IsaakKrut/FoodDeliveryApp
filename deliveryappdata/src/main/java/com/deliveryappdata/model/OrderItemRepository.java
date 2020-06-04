package com.deliveryappdata.model;

import com.deliveryappdata.beans.OrderItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface OrderItemRepository extends CrudRepository<OrderItem, Integer>{};
