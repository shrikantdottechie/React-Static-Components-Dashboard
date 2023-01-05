class Aside extends React.Component {
    render(){
        return (
        <aside>
            <ul>
                <li>Dashboard</li>
                <li> Widget</li>
                <li> Reviews</li>
                <li> Customers</li>
                <li> Online Analysis</li>
                <li> Setting</li>
            </ul>
        </aside>
        )
    }
}


class Reviews extends React.Component{
    render() {
       return <section>
        <h5>Reviews</h5>
        <h1>1281</h1>
        <h4>960</h4>
        <h4>321</h4>
        </section>       
    }
}

class AvgRating extends React.Component {
    render(){
        return <section>
          <h5>Av Rating</h5>
          <h1>4.6</h1> </section>
    }
}

class Sentiment extends React.Component {
    render(){
        return <section>
          <h5>Sentiment Analysis</h5>
          <h3>960</h3><br/>
          <h3>122</h3><br/>
          <h3>321</h3><br/>
          </section>
    }
}

class WebVisitors extends React.Component {
    render(){
        return <section id='large'>
            <h5>Website Visitors</h5>
            <h1>821</h1>
            <div></div>

        </section>
    }
}
class App extends React.Component {
    render() {
      return (
        <div id='app'>
          <Aside />
          <div id='container'>
            <div id='top'>
              <Reviews />
              <AvgRating />
              <Sentiment />
            </div>
            <WebVisitors />
          </div>
        </div>
      );
    }
  }
  
{/* <section>Reviews 1,281</section>
<section>Average Rating 4.6</section>
<section>Sentiment Analysis 960 122 321</section> */}
ReactDOM.render(
    <App />,
    document.querySelector('main')
  );

