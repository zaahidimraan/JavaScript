  // arrays for books/publishers/author/authors/publishing date here
  let bookName=[`zahd`,`imran`,`gondal`];
  let pubName=[`zahd`,`imran`,`zahid`];
  let authorName=[`zahid`,`imran`,`zahid`];
  let date=[`zahd`,`imran`,`tttttt`];
  let tempCount={};

// for head
function headFunction(){

    let iconImg = document.createElement('link');
    iconImg.setAttribute('rel','icon');
    iconImg.setAttribute('href','icon.png');
    iconImg.setAttribute('type','image/x-icon');
    document.head.appendChild(iconImg);

    let title = document.createElement('title');
    title.innerText='Library Management';
    document.head.appendChild(title);

    let stylescss = document.createElement('link');
    stylescss.setAttribute('rel','stylesheet');
    stylescss.setAttribute('href','styles.css');
    document.head.appendChild(stylescss);
}

//  for library managnment
function LibMT(){
    let div1 = document.createElement('div');
    div1.setAttribute('class','container bg-info m-0');
    div1.setAttribute('id','Lib');
    div1.setAttribute('style','width:100%;max-width:100%;');
    document.body.appendChild(div1);

    const divTemp=document.querySelector('#Lib');

    let LibM = document.createElement('h1');
    LibM.setAttribute('id','LibMText');
    LibM.setAttribute('class','bg-info p-3 m-0 text-left');
    LibM.setAttribute('style','color:white;width:100%;max-width:100%;background-size:100% 100%;');
    LibM.innerText='Library Management';
    divTemp.appendChild(LibM);
}
// div added
function divSpaceAdd(){
  let div1 = document.createElement('div');
  div1.setAttribute('class','container m-3');
  div1.setAttribute('id',`tableDiv`);
  div1.setAttribute('style','width:100%;max-width:100%;');
  document.body.appendChild(div1); 
}
// div remove
function divSpaceRemove(){
  let div1 = document.getElementById('tableDiv');
  div1.parentNode.removeChild(div1);
}
// Style to table
function StyleTable(){
  let table=document.querySelectorAll('table');
    let th=document.querySelectorAll('th');
    let td=document.querySelectorAll('td');
  // adding styles to table
    
    table.setAttribute('style',`font-family: arial, sans-serif;
  width: 60%;align-self:items;margin-left:auto;margin-right:auto;`);
    th.setAttribute('style',`border: 1px solid #dddddd;
text-align: left;
padding: 8px`);
    td.setAttribute('style',`border: 1px solid #dddddd;
text-align: left;
padding: 8px`);
    tr.setAttribute('style',`background-color: #dddddd;`);
    
}


//functions to functionality to home/author/publishers/books
function Home(){
  const divTemp=document.querySelector('#tableDiv');
  let divH = document.createElement('h2');
  divH.setAttribute('id','divH');
  divH.setAttribute('class','p-3 my-4 text-left');
  divH.innerText='Home';
  divTemp.appendChild(divH);
    
    // adding table to the page
    let table=document.createElement('table');
    let tr1=document.createElement('tr');
    
    let th1=document.createElement('th');
    th1.innerText='Sr';
    let th2=document.createElement('th');
    th2.innerText='BookName';
    let th3=document.createElement('th');
    th3.innerText='Author';
    let th4=document.createElement('th');
    th4.innerText='Publisher';
    let th5=document.createElement('th');
    th5.innerText='Date';
  
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    
    table.appendChild(tr1);

    for(let i=0;i<bookName.length;i++)
    {
      
      let tr2=table.insertRow(i+1);
      let td1=tr2.insertCell(0);
      td1.innerText=i+1;
      let td2=tr2.insertCell(1);
      td2.innerText=bookName[i];
      let td3=tr2.insertCell(2);
      td3.innerText=authorName[i];
      let td4=tr2.insertCell(3);
      td4.innerText=pubName[i];
      let td5=tr2.insertCell(4);
      td5.innerText=date[i];

    }
    
    
    divTemp.appendChild(table); 

    let divF = document.createElement('h4');
    divF.setAttribute('id','divH');
    divF.setAttribute('class','p-3 my-4 text-center');
    divF.innerText='Books in Library';
    divTemp.appendChild(divF);
   
}

// books of each author/publishers
function bookCount(arr){
  let count = {};

  for (let element of arr) {
  if (count[element]) {
    count[element] += 1;
   } else {
    count[element] = 1;
   }
  }
  return count;
}

// delete Button
function deleteButtonA(index){
  let button=document.createElement('input');
  button.setAttribute('type','button');
  button.setAttribute('value','Delete');
  button.setAttribute('class','delete btn btn-danger p-1');
  //Delete row on delete button click
  button.onclick=	$(document).on("click", ".delete", function(){
    let currentRow=$(this).closest("tr");
		let col1=currentRow.find("td:eq(2)").text();
    
  for(let i=0; i<authorName.length;i++)
  {
    if(authorName[i]==`${col1}`)
       {
        pubName.splice(i,1);
        authorName.splice(i,1);
        bookName.splice(i,1);
        date.splice(i,1);
        threeButtonAuthor();
       }
       
  }


    
 let parent=$(this).parents("tr");
 parent.remove();
$(".add-new").removeAttr("disabled");
 
})
  return button;
}

function temp(index){
  
}

function deleteButtonP(){
  let button=document.createElement('input');
  button.setAttribute('type','button');
  button.setAttribute('value','Delete');
  button.setAttribute('class','delete btn btn-danger p-1');
  //Delete row on delete button click
	
  button.onclick=	$(document).on("click", ".delete", function(){

    let currentRow=$(this).closest("tr");
		let col1=currentRow.find("td:eq(2)").text();
    
  for(let i=0; i<pubName.length;i++)
  {
    if(pubName[i]==`${col1}`)
       {
        pubName.splice(i,1);
        authorName.splice(i,1);
        bookName.splice(i,1);
        date.splice(i,1);
        threeButtonPublishers();
       }
       
  }



    $(this).parents("tr").remove();
$(".add-new").removeAttr("disabled");

});;
  return button;
}





function Author(){
  const divTemp=document.querySelector('#tableDiv');
  let divH = document.createElement('h2');
  divH.setAttribute('id','divH');
  divH.setAttribute('class','p-3 my-4 text-left');
  divH.innerText='Author';
  divTemp.appendChild(divH);
    
    // adding table to the page
    let table=document.createElement('table');
    let tr1=document.createElement('tr');
    
    let th1=document.createElement('th');
    th1.innerText='Sr';
    let th2=document.createElement('th');
    th2.innerText='Number of books';
    let th3=document.createElement('th');
    th3.innerText='Author';
    let th4=document.createElement('th');
    th4.innerText='Delete';
  
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    
    table.appendChild(tr1);

    tempCount=bookCount(authorName);
    let j=0;
    for(let i of Object.entries(tempCount))
    {
      
      let tr2=table.insertRow(j+1);
      let td1=tr2.insertCell(0);
      td1.innerText=j+1;
      let td2=tr2.insertCell(1);
      td2.innerText=i[1];
      let td3=tr2.insertCell(2);
      td3.setAttribute('id',`${i[0]}`);
      td3.innerText=i[0];
      let td4=tr2.insertCell(3);

      td4.appendChild(deleteButtonA(`${i[0]}`));
      j++;
    }
    
    
    divTemp.appendChild(table); 

    let divF = document.createElement('h4');
    divF.setAttribute('id','divH');
    divF.setAttribute('class','p-3 my-4 text-center');
    divF.innerText='Authors whose Books in Library';
    divTemp.appendChild(divF);
  
}

function Publishers(){
  const divTemp=document.querySelector('#tableDiv');
  let divH = document.createElement('h2');
  divH.setAttribute('id','divH');
  divH.setAttribute('class','p-3 my-4 text-left');
  divH.innerText='Publishers';
  divTemp.appendChild(divH);
    
    // adding table to the page
    let table=document.createElement('table');
    let tr1=document.createElement('tr');
    
    let th1=document.createElement('th');
    th1.innerText='Sr';
    let th2=document.createElement('th');
    th2.innerText='Number of books';
    let th3=document.createElement('th');
    th3.innerText='Publisher';
    let th4=document.createElement('th');
    th4.innerText='Delete';
  
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    
    table.appendChild(tr1);

    tempCount=bookCount(pubName);
    let j=0;
    for(let i of Object.entries(tempCount))
    {
      
      let tr2=table.insertRow(j+1);
      let td1=tr2.insertCell(0);
      td1.innerText=j+1;
      let td2=tr2.insertCell(1);
      td2.innerText=i[1];
      let td3=tr2.insertCell(2);
      td3.innerText=i[0];
      let td4=tr2.insertCell(3);
      td4.appendChild(deleteButtonP());
      j++;
    }
    
    
    divTemp.appendChild(table); 

    let divF = document.createElement('h4');
    divF.setAttribute('id','divH');
    divF.setAttribute('class','p-3 my-4 text-center');
    divF.innerText='Publishers whose Books in Library';
    divTemp.appendChild(divF);
  
}

// adding form to the books 
function FormFtn(){
  let form=document.createElement('form');
  form.setAttribute('style',`width: 600px;
    margin-left:auto;
    margin-right:auto;`)

  let divForm=document.getElementById('tableDiv');

  let divH=document.createElement('div');
  let h1=document.createElement('h5');
  h1.innerText='Add a Book';
  divH.appendChild(h1);
  divH.setAttribute('class','bg bg-warning p-3 my-4');
  form.appendChild(divH);

  form.appendChild(inputTake('Book'));
  form.appendChild(inputTake('Publisher'));
  form.appendChild(inputTake('Author'));

  form.appendChild(inputDate('Author'));

  form.appendChild(formFooter());

  divForm.appendChild(form)
  
}

// function to add input 
function inputTake(name){
  let div1=document.createElement('div');
  div1.setAttribute('class','row g-2 mb-3');

  let label=document.createElement('label');
  label.setAttribute('class','col-sm-2 col-lg-4 col-form-label');
  label.innerText=`${name} Name : `;
  div1.appendChild(label);

  let div2=document.createElement('class','col-sm-10')
  let input=document.createElement('input');
  input.setAttribute('id',`${name}`);
  input.setAttribute('class','form-control');
  input.setAttribute('type','text');
  input.setAttribute('placeholder',`Enter ${name} name`);
  div2.appendChild(input);
  div1.appendChild(div2);

  return(div1);
}

// function to add input 
function inputDate(){
  let div1=document.createElement('div');
  div1.setAttribute('class','row g-2 mb-3');

  let label=document.createElement('label');
  label.setAttribute('class','col-sm-2 col-lg-4 col-form-label');
  label.innerText=` Date : `;
  div1.appendChild(label);

  let div2=document.createElement('class','col-sm-10')
  let input=document.createElement('input');
  input.setAttribute('id',`dateTake`);
  input.setAttribute('class','form-control');
  input.setAttribute('type','date')
  div2.appendChild(input);
  div1.appendChild(div2);

  return(div1);
}

// footer

function formFooter(){
  let div1=document.createElement('div');
  div1.setAttribute('class','modal-footer justify-content-center');

  let input=document.createElement('input');
  input.setAttribute('id',`submit`);
  input.setAttribute('class','inputbtn btn btn-primary col-auto col-lg-4');
  input.setAttribute('type','submit');
  input.setAttribute('value',`Add`);
  input.onclick=	$(document).on("click", ".inputbtn", function(){
    
    let name=document.getElementById('Book').value;
    bookName.push(name);
    
    let pub=document.getElementById('Publisher').value;
    pubName.push(pub);
    
    let aut=document.getElementById('Author').value;
    authorName.push(aut);
    let date1=document.getElementById('dateTake').value;

    date.push(date1);
    threeButtonBooks();
    
    
  });;
  div1.appendChild(input);


  return(div1);
}

// button for delete/edit
function deleteButtonB(){
  let button=document.createElement('input');
  button.setAttribute('type','button');
  button.setAttribute('value','Delete');
  button.setAttribute('class','deleteB btn btn-danger p-1');
  //Delete row on delete button click
	
  button.onclick=	$(document).on("click", ".deleteB", function(){
		
    let currentRow=$(this).closest("tr");
		let col1=currentRow.find("td:eq(1)").text();
    
  for(let i=0; i<bookName.length;i++)
  {
    if(bookName[i]===`${col1}`)
       {
        pubName.splice(i,1);
        authorName.splice(i,1);
        bookName.splice(i,1);
        date.splice(i,1);
        threeButtonBooks();
       }    
  }

    $(this).parents("tr").remove();
    $(".add-new").removeAttr("disabled");

});;

  return button;
}

function editButtonB(){
  let button=document.createElement('input');
  button.setAttribute('type','button');
  button.setAttribute('value','Edit');
  button.setAttribute('class','edit btn btn-danger px-2 py-1');
  //Delete row on delete button click
	
  button.onclick=	$(document).on("click", ".edit", function(){		
    $(this).parents("tr").find("td:eq(1)").each(function(){

      let currentRow=$(this).closest("tr");
      let col1=currentRow.find("td:eq(1)").text();
      
    for(let i=0; i<bookName.length;i++)
    {
      if(bookName[i]===`${col1}`)
         {
          pubName.splice(i,1);
          authorName.splice(i,1);
          bookName.splice(i,1);
          date.splice(i,1);
         }    
    }

			$(this).html('<input type="text" id="bookedit" class="form-control" value="' + $(this).text() + '">');
		});
    $(this).parents("tr").find("td:eq(2)").each(function(){
			$(this).html('<input type="text" id="authoredit" class="form-control" value="' + $(this).text() + '">');
		});
    $(this).parents("tr").find("td:eq(3)").each(function(){
			$(this).html('<input type="text" id="publisheredit" class="form-control" value="' + $(this).text() + '">');
		});
    $(this).parents("tr").find("td:eq(4)").each(function(){
			$(this).html('<input type="text" id="dateedit" class="form-control" value="' + $(this).text() + '">');
		});
    $(this).parents("tr").find("td:eq(5)").each(function(){
			$(this).html('<input type="button" value="Save" class="btn btn-info" onclick="Save()"></input>');
		});	
  });

  return button;
}

function Save(){
  
  let name=document.getElementById('bookedit').value;
  bookName.push(name);
  
  let pub=document.getElementById('publisheredit').value;
  pubName.push(pub);
  
  let aut=document.getElementById('authoredit').value;
  authorName.push(aut);

  
  let date1=document.getElementById('dateedit').value;
  date.push(date1);

  threeButtonBooks();

}

function Books(){
  const divTemp=document.querySelector('#tableDiv');
  let divH = document.createElement('h2');
  divH.setAttribute('id','divH');
  divH.setAttribute('class','p-3 my-4 text-left');
  divH.innerText='Books';
  divTemp.appendChild(divH);
    
  FormFtn();
    // adding table to the page
    let table=document.createElement('table');
    let tr1=document.createElement('tr');
    
    let th1=document.createElement('th');
    th1.innerText='Sr';
    let th2=document.createElement('th');
    th2.innerText='BookName';
    let th3=document.createElement('th');
    th3.innerText='Author';
    let th4=document.createElement('th');
    th4.innerText='Publisher';
    let th5=document.createElement('th');
    th5.innerText='Date';
    
    let th7=document.createElement('th');
    th7.innerText='Edit';
    let th6=document.createElement('th');
    th6.innerText='Delete';

  
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    tr1.appendChild(th4);
    tr1.appendChild(th5);
    tr1.appendChild(th7);
    tr1.appendChild(th6);

    table.appendChild(tr1);

    for(let i=0;i<bookName.length;i++)
    {
      
      let tr2=table.insertRow(i+1);
      let td1=tr2.insertCell(0);
      td1.innerText=i+1;
      let td2=tr2.insertCell(1);
      td2.setAttribute('class','name');
      td2.innerText=bookName[i];
      let td3=tr2.insertCell(2);
      td3.innerText=authorName[i];
      let td4=tr2.insertCell(3);
      td4.innerText=pubName[i];
      let td5=tr2.insertCell(4);
      td5.innerText=date[i];
      let td6=tr2.insertCell(5)
      td2.setAttribute('class','editButton');
      td6.appendChild(editButtonB());
      let td7=tr2.insertCell(6)
      td7.appendChild(deleteButtonB());
    }
    
    
  divTemp.appendChild(table); 

  let divF = document.createElement('h4');
  divF.setAttribute('id','divH');
  divF.setAttribute('class','p-3 my-4 text-center');
  divF.innerText='Books in Library';
  divTemp.appendChild(divF);
  
}


// for Buttons
function buttonSpace(){

    let div1 = document.createElement('div');
    div1.setAttribute('class','container text-center');
    div1.setAttribute('id','threeButton');
    document.body.appendChild(div1);
}

function buttonSpaceRemove(){
  let div1 = document.getElementById('threeButton');
  div1.parentNode.removeChild(div1);
}

function ButtonMaker(name)
{
    let button3 = document.createElement('button');
    button3.setAttribute('class','btn btn-info btn-outline-dark m-3 px-3');
    button3.setAttribute('type','button');
    button3.setAttribute('style','boder:rigid;border-radius:4px');
    button3.setAttribute('id',name);
    button3.setAttribute('onclick',`threeButton${name}()`);
    button3.innerText=name;  
    return button3;  
}


function threeButtonBooks(){
  divSpaceRemove();
  buttonSpaceRemove();
  divSpaceAdd();
  Books();
  buttonSpace();
    const divTemp = document.querySelector('#threeButton'); 
    divTemp.appendChild(ButtonMaker('Home'));
    divTemp.appendChild(ButtonMaker('Publishers'));
    divTemp.appendChild(ButtonMaker('Author'));
}

function threeButtonHome(){
    divSpaceRemove();
    buttonSpaceRemove();
    divSpaceAdd();
    Home();
    buttonSpace();
    const divTemp = document.querySelector('#threeButton'); 
    divTemp.appendChild(ButtonMaker('Author'));
    divTemp.appendChild(ButtonMaker('Publishers'));
    divTemp.appendChild(ButtonMaker('Books'));
}

function threeButtonPublishers(){
  divSpaceRemove();
  buttonSpaceRemove();
  divSpaceAdd();
  Publishers();
  buttonSpace();
    const divTemp = document.querySelector('#threeButton'); 
    divTemp.appendChild(ButtonMaker('Home'));
    divTemp.appendChild(ButtonMaker('Author'));
    divTemp.appendChild(ButtonMaker('Books'));
}

function threeButtonAuthor(){
  divSpaceRemove();
  buttonSpaceRemove();
  divSpaceAdd();
  Author();
  buttonSpace();
    const divTemp = document.querySelector('#threeButton'); 
    divTemp.appendChild(ButtonMaker('Home'));
    divTemp.appendChild(ButtonMaker('Publishers'));
    divTemp.appendChild(ButtonMaker('Books'));
}

// main function
function IndexFunction(){
  headFunction();
  LibMT();
  divSpaceAdd();
  buttonSpace();
  threeButtonHome();


}

// call main function to load page
IndexFunction();

