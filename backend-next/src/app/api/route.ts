import {NextResponse} from 'next/server';
//Get Route
export async function GET(){
    return  NextResponse.json(
   {
    hello : 'world',
   }
 );
 }
 // Post route
 export async function POST(request:Request){
    return  NextResponse.json(
      
   {
    message: 'hello world',
   }
 );
 }
 // open your terminal and run the following command
 // npm run dev
 // go to postman and send a GET and/or  POST request to localhost:3000/api 
 // GET Response: { "hello": "world" }
 // POST Response: { "message": "hello world" }
  
