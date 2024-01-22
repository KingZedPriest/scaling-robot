import correctIcon from "../../public/Images/correctGreen.svg";
import wrongIcon from "../../public/Images/wrongRed.svg";

export const successModalProps = {
    icon: correctIcon,
    altText: "Correct Icon",
    message: "Your account was created successfully",
    messageTitle: "Success",
  };
  
export const errorModalProps = {
    icon: wrongIcon,
    altText: "Error Icon",
    message: "There was an error creating your account",
    messageTitle: "Error",
  };