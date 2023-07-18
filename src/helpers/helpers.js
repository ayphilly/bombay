import { notification } from 'antd';


// notifications
export const notifSuccess = (
    message,
    title,
    type = 'success',
  ) => {
    notification[type]({
        message: title,
        description: message,
        duration:5,
        style: {
          width: 450,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#4DDA89",
          borderRadius: 10,
          backgroundColor: "#F5FFF9",
          color: "#12743C",
          marginTop:100,
          zIndex:9999999
        }
      });
  };
  
  export const notifErr = (
    message,
    title,
    type = 'error',
  ) => {
    notification[type]({
        message: title,
        description: message,
        duration:5,
        style: {
          width: 450,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#DD2323",
          borderRadius: 10,
          backgroundColor: "#FFF0F0",
          color: "#BB1414",
          marginTop:100,
          zIndex:9999999
        }
      });
  };