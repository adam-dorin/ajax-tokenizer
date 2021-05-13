# Ajax-Tokenizer

## Description:

This plugin will get your JSON data from an endpoint and display it in the DOM

#### Still in idea stage - not viable to be used in any production enviourment


### Basic working logic
 1. Bind the elements in question with a keypress handler
 2. On keypress do a get to target provided & display the values returned
 3. Provide messages for : no results found, error, input focused
 4. Provide callbacks for : keypress, beforeAjax, success , error

## Features Road map:
 + Get all tokens from a source and : (MVP) - dependecy jquery
    - 1.1 : Execute all callbacks specified
    - 1.2 : Display them in the DOM

### Further developments :

 1. Handle a template for the object:
      - Explicit template where the html is provided;
      - Mustache template where a mustache template is provided for the object;
 2. Validators of data - where you provide a model and check against the incoming/outgoing data
