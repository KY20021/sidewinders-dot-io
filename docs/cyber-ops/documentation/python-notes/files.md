# Files in python

Files are used to store data permanently. They are used to store data in a non-volatile memory (e.g., hard disk). Files are used to save data, load data, and perform various operations on data. In Python, files are opened using the built-in `open()` function. The `open()` function returns a file object that can be used to perform various operations on the file.

## File modes

-   `r` - Read - Default value. Opens a file for reading.
-   `a` - Append - Opens a file for appending. The file pointer is at the end of the file if the file exists. That is, the file is in the append mode. If the file does not exist, it creates a new file for writing.
-   `w` - Write - Opens a file for writing. If the file exists, it truncates the file to zero length. If the file does not exist, it creates a new file for writing.

## Reading a file

### Using Read

Read reads the entire file and returns the content as a string.

```python
# Open a file in read mode
with open('file.txt', 'r') as file:
    # Read the entire file
    content = file.read()
    print(content)
```

### Using Readlines

Readlines reads the entire file line by line and returns a list of lines, the lines are typed as strings.

```python
# Open a file in read mode
with open('file.txt', 'r') as file:
    # Read the first line
    line = file.readlines()
    print(line)
```
