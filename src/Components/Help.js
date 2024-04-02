import React, { useState } from "react";
import './help.css'

function Help() {
  const data = [
    {
      question: "What is Food-Court Customer Care Number?",
      answer:"We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in",
      id: "1",
    },
    
    {
      question:"Can I edit my order?",
      answer:"Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
      id:"2"
    },

    {
        question:"I want to cancel my order",
        answer:"We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
        id:"3"
      },

      {
        question:"Will Food-Court be accountable for quality/quantity?",
        answer:"Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
        id:"4"
      },

      {
        question:"Is there a minimum order value?",
        answer:"We have no minimum order value and you can order for any amount. ",
        id:"5"
      },

      {
        question:"Do you charge for delivery?",
        answer:"Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
        id:"6"
      },

      {
        question:"How long do you take to deliver?",
        answer:"Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant",
        id:"7"
      },

      {
        question:"What are your delivery hours?",
        answer:"Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
        id:"8"
      },

      {
        question:"Can I order from any location?",
        answer:"We will deliver from any restaurant listed on the search results for your location. We recommend enabling your GPS location finder and letting the app auto-detect your location.",
        id:"9"
      },

      {
        question:"Is single order from many restaurants possible?",
        answer:"We currently do not support this functionality. However, you can place orders for individual items from different restaurants",
        id:"10"
      },
      {
        question:"Is single order from many restaurants possible?",
        answer:"We currently do not support this functionality. However, you can place orders for individual items from different restaurants",
        id:"11"
      },
      {
        question:"Is single order from many restaurants possible?",
        answer:"We currently do not support this functionality. However, you can place orders for individual items from different restaurants",
        id:"12"
      },


  ];
  const [selectedId,setSelectedId]=useState()

  return (
    <div className="container bg-light text-dark px-5 p-3  w-50 m-auto rounded mb-5">
      <h5 className="fw-bold  fs-3">FAQ's</h5>
      {
          data.map((item)=>{
            return <div className="accodian mb-3 rounded"> 
            
            <div className="d-flex justify-content-between question-accrd" onClick={()=>setSelectedId(item.id)}>
                <div className="text-primary fw-bold">{item.question}</div>
                <div>
                  {
                    selectedId===item.id?<i className="fa fa-angle-up fw-bold"></i>:<i className="fa fa-angle-down fw-bolder"></i>
                  }
                  </div>
            </div>
            {
              selectedId===item.id ? <div className="answer-accrd" onClick={()=>setSelectedId("")}>{item.answer}</div>:""
            }
            
          </div>
          })
        }
      
    </div>
  );
}

export default Help;
