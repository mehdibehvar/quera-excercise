tips:
1-At Merix, we use Next.js as our preferred tool for when a project needs React, because it comes preloaded with many things we look for when deploying production-ready apps. We also use TypeScript because it helps us write less error-prone code,

2-[onClick={()=>dispatch(increment())}] in onclick we have an arrow function for dispatch

3-for the next Image component adress the src from public:  src={"/cargando-loading.gif"} or  src={"/assets/images/cargando-loading.gif"} so fer giving the src the url should start by /

4-you should invok the createAsyncthunk function in the dispatch:[onClick={()=>dispatch(fetchQoute())}]
5- if in the .env.local befor a data put NEXT_PUBLIC it will be public and in your app will be accessable;