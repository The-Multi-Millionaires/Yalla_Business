# Yalla Business 

## Summary:

Online small business are becoming a trend especially in Jordan, encouraged by the current situation with Covid-19, we decided to build a website designed only to support these businesses where each owner can create his own profile to market their products and services, which will make it easier for customers to explore their products.

## Vision:

Most business owners use social media platforms to market and display their products, however, they face many issues, one of which is reaching for costumers, since these sites are not fully designed to support business it is hard for costumers to find business owners profiles without knowing their usernames beforehand. However, our website will make it easier considering it is designed especially for that reason where it is all about business and only business!
Another important aspect to consider is by establishing Yalla Business, we will support local businesses which will in return support the local economy.

## User Stories:

As a user I can create a profile/store
As a user I want to post my products on my profile as pictures
As a user I want to search by the store name or categories
As a user I want to  add my reviews
As a user I want to see reviews for the stores 


## Data Base:

1. User model : user_id, username, profile_pic, location, description
2. Store model : store_id , pro_pic , store_name ,review_rank ,opening_times ,price_range , images ,store_location
3. Reviews model : user_id, store_name, store_location, store_pic, comment, review_rate


## Acceptance Tests:

1. Test create profile on API
2. Test create a store on API
3. Test post a review 


## Minimum Viable Product (MVP) definition :

The MVP is to give the ability for business owners to create profiles and display their products and services.

## [Wireframe](https://wireframe.cc/pro/pp/eaffaa0a7383218)