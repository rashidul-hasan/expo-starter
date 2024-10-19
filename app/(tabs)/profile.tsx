import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalCustomers: 0,
    totalProducts: 0,
  });

  const [activeOrders, setActiveOrders] = useState([]);

  useEffect(() => {
    // Mock API call to fetch stats
    fetchStats();
    // Mock API call to fetch active orders
    fetchActiveOrders();
  }, []);

  const fetchStats = () => {
    // Replace this with your API call logic
    setStats({
      totalOrders: 120,
      totalCustomers: 85,
      totalProducts: 230,
    });
  };

  const fetchActiveOrders = () => {
    // Replace this with your API call logic
    const orders = [
      { id: 1, customer: 'John Doe', status: 'Processing', date: '2024-10-18' },
      { id: 2, customer: 'Jane Smith', status: 'Shipped', date: '2024-10-17' },
      { id: 3, customer: 'Alice Johnson', status: 'Delivered', date: '2024-10-17' },
      { id: 4, customer: 'Bob Brown', status: 'Processing', date: '2024-10-16' },
      { id: 4, customer: 'Bob Brown', status: 'Processing', date: '2024-10-16' },
      { id: 4, customer: 'Bob Brown', status: 'Processing', date: '2024-10-16' },
      { id: 4, customer: 'Bob Brown', status: 'Processing', date: '2024-10-16' },
      { id: 4, customer: 'Bob Brown', status: 'Processing', date: '2024-10-16' },
      { id: 4, customer: 'Bob Brown', status: 'Processing', date: '2024-10-16' },
      { id: 4, customer: 'Bob Brown', status: 'Processing', date: '2024-10-16' },
      // Add more orders as needed to test the list
    ];
    setActiveOrders(orders.slice(0, 10));
  };

  const renderOrderItem = ({ item }) => (
      <View style={styles.orderItem}>
        <Text style={styles.orderText}>Order ID: {item.id}</Text>
        <Text style={styles.orderText}>Customer: {item.customer}</Text>
        <Text style={styles.orderText}>Status: {item.status}</Text>
        <Text style={styles.orderText}>Date: {item.date}</Text>
      </View>
  );

  return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statTitle}>Total Orders</Text>
              <Text style={styles.statValue}>{stats.totalOrders}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statTitle}>Total Customers</Text>
              <Text style={styles.statValue}>{stats.totalCustomers}</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statTitle}>Total Products</Text>
              <Text style={styles.statValue}>{stats.totalProducts}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Last 10 Active Orders</Text>
          <FlatList
              data={activeOrders}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderOrderItem}
          />
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: '30%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statTitle: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 10,
  },
  orderItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderText: {
    fontSize: 14,
    color: '#495057',
  },
});

export default HomeScreen;
