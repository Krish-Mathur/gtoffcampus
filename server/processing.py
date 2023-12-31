import json
import csv

def run():
    input_file = 'input.json'
    output_file = 'output.json'
    features = ['campus_title', 'campus_address', 'lead_text', 'landlord_website', 'reformat_floorplans', 'distance', 'features', 'Property Features', 'additional']
    
    try:
        with open(input_file, 'r') as f:
            data = json.load(f)
    except:
        print("Error reading input file")
        return
    
    output_data = {}
    for key in data:
        try:
            output_data[key] = {}
            for feature in features:
                output_data[key][feature] = data[key][feature]
        except:
            print("Error processing record with key:", key)
            continue
    
    try:
        with open(output_file, 'w') as f:
            json.dump(output_data, f)
    except:
        print("Error writing output file")
        return
    
    print("Conversion successful")