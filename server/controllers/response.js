const response = {
    
    // handling users auth req messages 

    userAlreadyExist: {
        code: 1,
        message: "User Already Exist"
    },
    passwordDoesNotMatch:{
        code: 2,
        message: "Password Doesn't Match"
    },
    invalidPassword:{
        code: 3,
        message: "Invalid Passowrd" 
    },
    invalidEmail:{
        code: 4,
        message: "Invalid Email"
    },
    userDoesNotExist:{
        code: 5,
        message: "User Doesn't Exist"
    },
    unexpectedError:{
        code: 6,
        message: "Unexpected Error"
    },

    // handling posts req messages

    noPostWithThisID: {
        code: 11,
        message: "No Post with this ID"
    }, 
    unauthenticated: {
        code: 12,
        message: "Unauthenticated Action"
    },
    postDeletedSuccessfully:{
        code: 13,
        message: "Post Deleted Sucessfully"
    }


}

module.exports = response;