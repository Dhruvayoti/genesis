const express=require('express')

let Blogm=require('./db')

const rout=express.Router();


function index(app){
app.get('/',async (req , res)=>{
    let blog = await Blogm.find()

    
    res.render('index' ,{blogs : blog ,admin:false})
}
)



}


function About(app){
    app.get('/about',async (req , res)=>{
       
    
        
        res.render('About')
    }
    )
    }
    rout.delete( '/:id', async (req ,res)=>{ try{
         await Blogm.findByIdAndDelete(req.params.id)
         let blog=  await Blogm.find()
        res.render('index',{ blogs : blog , admin: true}  )}catch(e){
            console.log(e)
        }

    } )   

rout.get('/',(req,res)=>{
res.render('admin')
})
rout.post('/',async (req,res)=>{
    
  try{ if(req.body.UserName ==="dhruva" && req.body.Password==="godkiller"){
    let blog = await Blogm.find()
  res.render('index',{blogs : blog, admin : true })
  } 
      
    if(req.body.UserName ==="Primegenesis" && req.body.Password==="Godof@thunder")
  res.render('newblog',{blogs : new Blogm()})}
  
  catch(e){
      
 console.log(e);
  }


    }
    )

rout.get('/new672341/:id' ,async (req,res)=>{
 let blog=await Blogm.findById(req.params.id)
 res.render('userBlog' ,{blogs : blog, para : req.params.id ,user : false})

})

rout.get('/new672341/user/:id' ,async (req,res)=>{
    let blog=await Blogm.findById(req.params.id)
    res.render('userBlog' ,{blogs : blog, para : req.params.id, user : true })
   })

   rout.get('/new672341/edit/:id' ,async (req,res)=>{
    let blog=await Blogm.findById(req.params.id)
   res.render('edit',{blogs : blog })
   })

//rout.get('/new672341' ,(req,res)=>{
   // res.render('newblog',{blogs : new Blogm()})
//})

rout.post('/new672341', async (req,res)=>{
   
    let blogm=new Blogm(
        {
            title : req.body.title,
            wname :req.body.wname,
            p1t :req.body.p1t,
            p1 :req.body.p1,
            p2t :req.body.p2t,
            p2 :req.body.p2
        }
    )
    
     try{ blogm=await blogm.save()
        res.redirect(`new672341/user/${blogm.id}`)
    } 
    catch(e){
        res.render('newblog',{blogs : blogm})
        console.log(e) 
        console.log(req.body)

     }
   
    }
)

rout.put('/new672341/edit/:id', async (req,res)=>{
   
    let blog=await Blogm.findById(req.params.id)
    blog.title =req.body.title,
    blog.wname =req.body.wname,
    blog.p1t =req.body.p1t,
    blog.p1 =req.body.p1,
    blog.p2t =req.body.p2t,
    blog.p2 =req.body.p2
    
    
     try{ blog=await blog.save()
        res.redirect(`/blog/new672341/user/${blog.id}`)
    } 
    catch(e){
        
        console.log(e) 
        console.log(req.body)

     }
   
    }
)


module.exports ={
    index,
    About,
    rout


}
