import json

def load_model(task_name):
    # Load model based on configuration in model_config.json
    with open('model_config.json') as f:
        config = json.load(f)
    model_name = config[task_name]['default']
    # TODO: Add logic to load the model (local or API-based) based on model_name
    pass

def switch_model(new_model_name):
    # Change model as per user selection in the admin panel
    # TODO: Add logic to switch the model
    pass