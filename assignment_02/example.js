let str="*_*govind*_~";
let ans={"b":0,"i":0,"s":0}
// 

function regex(str)
 {
    let n=str.length;
    let stack_01="";
    let stack_02="";
    for(let i=0;i<n;i++)
     {
        if(str[i]==='*'||str[i]==='_'||str[i]==='~') stack_01=str[i]+stack_01;
        else break;
     }
     for(let i=n-1;i>=0;i--)
     {
        if(str[i]==='*'||str[i]==='_'||str[i]==='~') stack_02=str[i]+stack_02;
        else break;
     } 
    //console.log(stack_01," ",stack_02,"   ")


    for(let i=0,j=0;i<stack_01.length&&j<stack_02.length;i++,j++)   
      {
           if(stack_01[i]===stack_02[j])
             {
                if(stack_01[i]==="*") ans.b++;
                if(stack_01[i]==="_") ans.i++;
                if(stack_01[i]==="~") ans.s++; 
             }
           else break;  
              
      }
  //  console.log(ans,"  ");

    let map={"*":0,"~":0,"_":0}
    for(let i=0;i<stack_01.length;i++) map[stack_01[i]]++;
    for(let i=0;i<stack_02.length;i++) map[stack_02[i]]++;

    for(let i=0;i<str.length;i++)
     {
        if(map[str[i]]===2)
         {  if(str[i]==="*") ans.b++;
            if(str[i]==="_") ans.i++;
            if(str[i]==="~") ans.r++; 
            break;
         }
     }

   for(i in ans)
    {
        if(ans[i]>1) ans[i]=1;
    }
   
   
    
     console.log(ans);
 }

 regex(str);
     
    