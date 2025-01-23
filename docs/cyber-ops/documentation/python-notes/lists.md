# Lists in python

- Lists are ordered collections of items that can be of different types.
- Lists are mutable, meaning they can be changed after they are created.
- Lists are created by placing items inside square brackets [] separated by commas.
- Sometimes commonly called arrays in other programming languages, lists can be used to store data of any type.

## Example

```python
# Creating a list
my_list = [1, 2, 3, 4, 5]
print(my_list)
```

```python
# Output
[1, 2, 3, 4, 5]
```

# List methods

## Append

Append an item to the end of the list.

```python
my_list = [1, 2, 3, 4, 5]
my_list.append(6)
print(my_list)
```

```python
# Output
[1, 2, 3, 4, 5, 6]
```

## Sort

Sort the list in ascending order. Ascending order means smallest to largest from top to bottom.

```python
my_list = [5, 3, 1, 4, 2]
my_list.sort()
print(my_list)
```

```python
# Output
[1, 2, 3, 4, 5]
```

## Count

Count the number of times an item appears in the list.

```python
my_list = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
count = my_list.count(1)
print(count)
```

```python
# Output
2

```
