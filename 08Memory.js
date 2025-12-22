// Primitive ( stack ), Non - primitive ( Heap )

let myyoutubename = "gARVITMODI";
let anothername =  myyoutubename;
 anothername= "Learn with Garvit";

 console.log(myyoutubename);
 console.log(anothername);

 let userone = {
    email:"useronegoogle.com",
    upi: "asfSAgmail.com",
 }
  
 let usertwo = userone;
 usertwo.email =  "kunal@gmail.com";
 console.log(usertwo.email);
//  ye stack ka example hai ye show kar rha hai origna value same rehta hai but 
// copy remain is same but in 
// heap orignal change.
//  Stack(primitive), Heap(Non primitive)



