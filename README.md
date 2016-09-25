# Ajax-Tokenizer

## Description:

This plugin will get your JSON data from an endpoint and display it in the DOM

#### Still in idea stage - not viable to be used in any production enviourment


###Basic working logic
 1. Bind the elements in question with a keypress handler
 2. On keypress do a get to target provided & display the values returned
 3.Provide messages for : no results found, error, input focused
 4. Provide callbacks for : keypress, beforeAjax, success , error

###Features Road map:
 1. Get all tokens from a source and : (MVP) - dependecy jquery
    1.1 : Execute all callbacks specified
    1.2 : Display them in the dom
###Further developments :
 2. Handle a template for the object:
      - explicit template where the html is provided;
      - mustache template where a mustache template is provided for the object;
  3. Validators of data - where you provide a a model and the I check agains the incoming/outogoing data
