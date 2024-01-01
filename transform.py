import json

# Read the existing JSON file
with open('secondTime.json', 'r') as file:
    input_data = json.load(file)

# Transform the structure
transformed_data = [{"property_id": property_id, **details} for property_id, details in input_data.items()]

# Write the transformed data to a new file
with open('final.json', 'w') as file:
    json.dump(transformed_data, file, indent=2)

print('Transformation complete!')
