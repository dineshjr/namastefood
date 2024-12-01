import RestaurantCard from "./RestaurantCard";

import { useState } from "react";

export const Body = () => {
    const resList = [
        {
          data: {
            id: "1",
            cloudinaryImageId: "restaurant-image-1",
            name: "Spicy Treat",
            cuisines: ["Indian", "Chinese"],
            area: "Chennai",
            lastMileTravelString: "2.5 km",
            costForTwoString: "₹300 for two",
            avgRating: 4.5,
            phoneNumber: "+91 12345 67890",
            ratingCount: 150,
            location: { latitude: 13.0827, longitude: 80.2707 },
          },
        },
        {
          data: {
            id: "2",
            cloudinaryImageId: "restaurant-image-2",
            name: "Pizza Hub",
            cuisines: ["Italian"],
            area: "Bangalore",
            lastMileTravelString: "5 km",
            costForTwoString: "₹500 for two",
            avgRating: 4.2,
            phoneNumber: "+91 98765 43210",
            ratingCount: 200,
            location: { latitude: 12.9716, longitude: 77.5946 },
          },
        },
        {
          data: {
            id: "3",
            cloudinaryImageId: "restaurant-image-3",
            name: "Sushi World",
            cuisines: ["Japanese"],
            area: "Delhi",
            lastMileTravelString: "1.2 km",
            costForTwoString: "₹1000 for two",
            avgRating: 4.8,
            phoneNumber: "+91 99876 54321",
            ratingCount: 300,
            location: { latitude: 28.6139, longitude: 77.209 },
          },
        },
        {
          data: {
            id: "4",
            cloudinaryImageId: "restaurant-image-4",
            name: "Burger Palace",
            cuisines: ["American"],
            area: "Mumbai",
            lastMileTravelString: "3.0 km",
            costForTwoString: "₹600 for two",
            avgRating: 4.6,
            phoneNumber: "+91 11223 44556",
            ratingCount: 180,
            location: { latitude: 19.076, longitude: 72.8777 },
          },
        },
        {
          data: {
            id: "5",
            cloudinaryImageId: "restaurant-image-5",
            name: "Taco Town",
            cuisines: ["Mexican"],
            area: "Pune",
            lastMileTravelString: "4.5 km",
            costForTwoString: "₹400 for two",
            avgRating: 4.4,
            phoneNumber: "+91 22334 55667",
            ratingCount: 220,
            location: { latitude: 18.5204, longitude: 73.8567 },
          },
        },
        {
          data: {
            id: "6",
            cloudinaryImageId: "restaurant-image-6",
            name: "Vegan Delights",
            cuisines: ["Vegan", "Healthy"],
            area: "Hyderabad",
            lastMileTravelString: "2.0 km",
            costForTwoString: "₹450 for two",
            avgRating: 4.7,
            phoneNumber: "+91 33445 66789",
            ratingCount: 175,
            location: { latitude: 17.385, longitude: 78.4867 },
          },
        },
        {
          data: {
            id: "7",
            cloudinaryImageId: "restaurant-image-7",
            name: "Curry Corner",
            cuisines: ["Indian"],
            area: "Ahmedabad",
            lastMileTravelString: "3.2 km",
            costForTwoString: "₹350 for two",
            avgRating: 4.3,
            phoneNumber: "+91 44556 77890",
            ratingCount: 160,
            location: { latitude: 23.0225, longitude: 72.5714 },
          },
        },
        {
          data: {
            id: "8",
            cloudinaryImageId: "restaurant-image-8",
            name: "Pasta Paradise",
            cuisines: ["Italian"],
            area: "Kolkata",
            lastMileTravelString: "4.0 km",
            costForTwoString: "₹550 for two",
            avgRating: 4.6,
            phoneNumber: "+91 55667 88901",
            ratingCount: 210,
            location: { latitude: 22.5726, longitude: 88.3639 },
          },
        },
        {
          data: {
            id: "9",
            cloudinaryImageId: "restaurant-image-9",
            name: "Grill House",
            cuisines: ["Grill", "Barbecue"],
            area: "Chennai",
            lastMileTravelString: "3.5 km",
            costForTwoString: "₹700 for two",
            avgRating: 4.5,
            phoneNumber: "+91 66778 99012",
            ratingCount: 190,
            location: { latitude: 13.0827, longitude: 80.2707 },
          },
        },
        {
          data: {
            id: "10",
            cloudinaryImageId: "restaurant-image-10",
            name: "Sweet Tooth",
            cuisines: ["Desserts", "Bakery"],
            area: "Delhi",
            lastMileTravelString: "2.0 km",
            costForTwoString: "₹250 for two",
            avgRating: 4.9,
            phoneNumber: "+91 77889 00123",
            ratingCount: 300,
            location: { latitude: 28.6139, longitude: 77.209 },
          },
        },
        {
          data: {
            id: "11",
            cloudinaryImageId: "restaurant-image-11",
            name: "Seafood Haven",
            cuisines: ["Seafood"],
            area: "Goa",
            lastMileTravelString: "1.5 km",
            costForTwoString: "₹1200 for two",
            avgRating: 4.8,
            phoneNumber: "+91 88990 11234",
            ratingCount: 250,
            location: { latitude: 15.2993, longitude: 74.124 },
          },
        },
        {
          data: {
            id: "12",
            cloudinaryImageId: "restaurant-image-12",
            name: "Noodle Nook",
            cuisines: ["Chinese", "Asian"],
            area: "Mumbai",
            lastMileTravelString: "2.2 km",
            costForTwoString: "₹400 for two",
            avgRating: 4.1,
            phoneNumber: "+91 99001 23456",
            ratingCount: 120,
            location: { latitude: 19.076, longitude: 72.8777 },
          },
        },
        {
          data: {
            id: "13",
            cloudinaryImageId: "restaurant-image-13",
            name: "Kebab King",
            cuisines: ["Middle Eastern"],
            area: "Bangalore",
            lastMileTravelString: "3.8 km",
            costForTwoString: "₹800 for two",
            avgRating: 4.7,
            phoneNumber: "+91 12323 45678",
            ratingCount: 210,
            location: { latitude: 12.9716, longitude: 77.5946 },
          },
        },
        {
          data: {
            id: "14",
            cloudinaryImageId: "restaurant-image-14",
            name: "Dumpling Den",
            cuisines: ["Chinese"],
            area: "Delhi",
            lastMileTravelString: "2.5 km",
            costForTwoString: "₹350 for two",
            avgRating: 4.4,
            phoneNumber: "+91 33456 78901",
            ratingCount: 180,
            location: { latitude: 28.6139, longitude: 77.209 },
          },
        },
        {
          data: {
            id: "15",
            cloudinaryImageId: "restaurant-image-15",
            name: "Salad Station",
            cuisines: ["Healthy", "Salads"],
            area: "Hyderabad",
            lastMileTravelString: "3.0 km",
            costForTwoString: "₹300 for two",
            avgRating: 4.5,
            phoneNumber: "+91 45678 90123",
            ratingCount: 160,
            location: { latitude: 17.385, longitude: 78.4867 },
          },
        },
        {
          data: {
            id: "16",
            cloudinaryImageId: "restaurant-image-16",
            name: "Cafe Mocha",
            cuisines: ["Cafe", "Italian"],
            area: "Kolkata",
            lastMileTravelString: "1.0 km",
            costForTwoString: "₹500 for two",
            avgRating: 4.6,
            phoneNumber: "+91 67890 12345",
            ratingCount: 220,
            location: { latitude: 22.5726, longitude: 88.3639 },
          },
        },
        {
          data: {
            id: "17",
            cloudinaryImageId: "restaurant-image-17",
            name: "Chaat Chaska",
            cuisines: ["Indian", "Street Food"],
            area: "Ahmedabad",
            lastMileTravelString: "3.5 km",
            costForTwoString: "₹200 for two",
            avgRating: 4.3,
            phoneNumber: "+91 78901 23456",
            ratingCount: 190,
            location: { latitude: 23.0225, longitude: 72.5714 },
          },
        },
        {
          data: {
            id: "18",
            cloudinaryImageId: "restaurant-image-18",
            name: "Pancake House",
            cuisines: ["American", "Breakfast"],
            area: "Goa",
            lastMileTravelString: "1.8 km",
            costForTwoString: "₹300 for two",
            avgRating: 4.2,
            phoneNumber: "+91 89012 34567",
            ratingCount: 170,
            location: { latitude: 15.2993, longitude: 74.124 },
          },
        },
        {
          data: {
            id: "19",
            cloudinaryImageId: "restaurant-image-19",
            name: "Steakhouse",
            cuisines: ["American", "Grill"],
            area: "Mumbai",
            lastMileTravelString: "2.8 km",
            costForTwoString: "₹1200 for two",
            avgRating: 4.7,
            phoneNumber: "+91 90123 45678",
            ratingCount: 210,
            location: { latitude: 19.076, longitude: 72.8777 },
          },
        },
        {
          data: {
            id: "20",
            cloudinaryImageId: "restaurant-image-20",
            name: "Falafel Fiesta",
            cuisines: ["Middle Eastern", "Vegan"],
            area: "Delhi",
            lastMileTravelString: "2.0 km",
            costForTwoString: "₹350 for two",
            avgRating: 4.6,
            phoneNumber: "+91 23456 78901",
            ratingCount: 140,
            location: { latitude: 28.6139, longitude: 77.209 },
          },
        },
      ];
  const [listOfRes, setListOfRes] = useState(resList);
  
  return (
    <>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.data.avgRating > 4.5);
            setListOfRes(filteredList)
            console.log(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a restaurant..."
          className="search-input"
        />
      </div>
      <div className="restaurant-list">
      {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </>
  );
};
