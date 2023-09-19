# InstaCuisine 
# Building a Food Ordering System with Subscriptions: A UML Guide

## Introduction

In today's fast-paced world, food ordering systems have become an integral part of our lives. Whether you're ordering your favorite pizza or trying out a new sushi place, these systems have simplified our dining experiences. In this article, we'll explore the architecture of a Food Ordering System with a Subscription model using Unified Modeling Language (UML).

## User Class

class User {
  - id: string
  - username: string
  - password: string
  - email: string
  + login(): boolean
  + register(): boolean
  + browseMenu(): MenuItem[]
  + addToCart(item: MenuItem): void
  + removeFromCart(item: MenuItem): void
  + viewCart(): CartItem[]
  + placeOrder(): Order
  + subscribe(plan: SubscriptionPlan): boolean
  + cancelSubscription(): boolean

}

The User class represents the customers of our food ordering system. It encapsulates user data such as ID, username, password, and email. Users can log in, register, browse the menu, add items to their cart, remove items, view their cart, place orders, subscribe to plans, and cancel subscriptions.

## MenuItem Class

class MenuItem {
  - id: string
  - name: string
  - description: string
  - price: float
  + updatePrice(newPrice: float): void
  + updateDescription(newDesc: string): void

}

The MenuItem class defines the items available in the menu. It includes attributes like ID, name, description, and price. Methods allow for updating the price and description of menu items.

## CartItem Class

class CartItem {
  - menuItem: MenuItem
  - quantity: int
  + updateQuantity(newQuantity: int): void
  + calculateSubtotal(): float

}


Cart items represent the items a user has added to their cart. Each cart item links to a MenuItem and tracks the quantity. Users can update the quantity and calculate the subtotal for each cart item.

## Order Class

class Order {
  - id: string
  - userId: string
  - items: CartItem[]
  - status: string
  - totalAmount: float
  + calculateTotalAmount(): float
  + updateStatus(newStatus: string): void
  + getDeliveryTime(): DateTime

}


Orders encapsulate information about a user's order, including order ID, user ID, cart items, status, and total amount. Methods calculate the total order amount, update the order status, and estimate the delivery time.

## MenuManager Class

class MenuManager {
  - menu: MenuItem[]
  + addMenuItem(item: MenuItem): void
  + removeMenuItem(item: MenuItem): void
  + updateMenuItem(item: MenuItem): void

}

The MenuManager class handles the menu items available in the system. It allows adding, removing, and updating menu items.

## PaymentGateway Class

class PaymentGateway {
  + processPayment(order: Order): boolean

}


The PaymentGateway class is responsible for processing payments for user orders. It takes an order as input and returns a boolean indicating whether the payment was successful.

## SubscriptionPlan Class

lass SubscriptionPlan {
  - id: string
  - name: string
  - price: float
  + updatePrice(newPrice: float): void

}

SubscriptionPlan defines the various subscription plans available to users. It includes attributes like ID, name, and price. Users can update the subscription plan's price.

## Subscription Class

class Subscription {
  - id: string
  - userId: string
  - plan: SubscriptionPlan
  - startDate: DateTime
  - endDate: DateTime

}

The Subscription class represents a user's subscription to a specific plan. It contains details like ID, user ID, plan, start date, and end date.

## Relationships

User --|{ CartItem : Contains
User --|{ Order : Places
User -- Subscription : Has
Subscription -- SubscriptionPlan : Subscribes to
User --|> MenuManager : Manages
User -- PaymentGateway : Makes payment

- Users can have cart items and orders, as represented by the "Contains" and "Places" relationships, respectively.
- Users can subscribe to plans, and each subscription corresponds to a subscription plan.
- Users manage the menu through the MenuManager class.
- Users make payments using the PaymentGateway class.

## Conclusion

This UML diagram provides a clear overview of the architecture for a Food Ordering System with a Subscription model. It illustrates the key classes, their attributes, and relationships, offering a solid foundation for developing such a system. By following this UML guide, you can build a robust and user-friendly food ordering platform to delight your customers.

## API Under development and testing phase
