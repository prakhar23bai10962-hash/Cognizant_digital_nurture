# 📦 DSA Week 1 - Inventory Management System

## 📌 Problem Statement
Design a system to manage warehouse inventory using efficient data structures.

---

## Data Structure Used
We used **HashMap<Integer, Product>** because:
- Fast access using productId
- No linear search required
- Efficient for large datasets

---

## Operations

### Add Product
Insert product into HashMap using productId as key.

### Update Product
Access product directly using key and modify values.

### Delete Product
Remove product using productId.

---

##  Time Complexity Analysis

| Operation | Complexity | Reason |
|----------|-----------|--------|
| Add      | O(1)      | Direct insert in HashMap |
| Update   | O(1)      | Direct access via key |
| Delete   | O(1)      | Direct removal via key |

---

## Conclusion
HashMap provides an efficient way to manage inventory with constant time operations, making it suitable for large warehouse systems.