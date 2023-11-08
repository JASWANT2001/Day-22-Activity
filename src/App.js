
import Message from "./Message";
import "./App.css"


function App() {
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">
      
      <Message plan = "Free" user = "Single user" price = "$0/" storage = "5GB storage"></Message>
      <Message plan = "Plus"  user = "5 users" price = "$9/" storage = "50GB storage"></Message>
      <Message plan = "Pro"  user = "Unlimited users" price = "$49/" storage = "150GB storage"></Message>
      
    </div>
    </div>
    </section>
   
  );
}

export default App;
