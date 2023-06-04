```python
# Function to replace a string in all files
def replace_string(old_string, new_string, file_types):
    for file_type in file_types:
        for file in glob.glob(f"*.{file_type}"):
            with open(file, "r") as f:
                content = f.read()
            content = content.replace(old_string, new_string)
            with open(file, "w") as f:
                f.write(content)

# Function to replace words in all files
def replace_words(word_list_old, word_list_new, file_types):
    for file_type in file_types:
        for file in glob.glob(f"*.{file_type}"):
            with open(file, "r") as f:
                content = f.read()
            for i in range(len(word_list_old)):
                content = content.replace(word_list_old[i], word_list_new[i])
            with open(file, "w") as f:
                f.write(content)

# Function to replace image filenames in all files
def replace_images(image_list_old, image_list_new, file_types):
    for file_type in file_types:
        for file in glob.glob(f"*.{file_type}"):
            with open(file, "r") as f:
                content = f.read()
            for i in range(len(image_list_old)):
                content = content.replace(image_list_old[i], image_list_new[i])
            with open(file, "w") as f:
                f.write(content)

# Replace "Wuphf" with "Meaow.ai"
replace_string("Wuphf", "Meaow.ai", ["html", "css", "js"])

# Replace dog-related words with cat-related words
dog_words = ["dog", "puppy", "canine", "pooch"]
cat_words = ["cat", "kitten", "feline", "tabby"]
replace_words(dog_words, cat_words, ["html", "css", "js"])

# Replace dog images with cat images
dog_images = ["dog1.jpg", "dog2.jpg", "dog3.jpg"]
cat_images = ["cat1.jpg", "cat2.jpg", "cat3.jpg"]
replace_images(dog_images, cat_images, ["html", "css", "js"])
```

Meaow.ai