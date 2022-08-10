'use strict'

class QuoteGenerator extends React.Component{
    constructor(props){
        super(props);
        this.state={
        "quote": "This is totally a very legit website with no issues. I am hilarious, tweet everything I say.",
        "author": "Anonymous"
        }
        
        this.newQuote = this.newQuote.bind(this);
        
    }
    
    newQuote(){
        let quoteArray = [{"quote": "quote 1 - To be or not to be, that is the question.", "author": "author 1"},{"quote": "I have an exceedingly small ego", "author": "author 2"},{"quote": "That man is playing galaga. Thought we wouldn't notice, but we did.", "author": "author 3"}];
        let quoteNumber = Math.floor(Math.random() * (3 - 1));
        while(this.state.quote == quoteArray[quoteNumber].quote){
        quoteNumber = Math.floor(Math.random() * (3 - 1));
            }
        this.setState(quoteArray[quoteNumber]);
        
    }
    
    render(){
        return <div>
        <div id="text-holder">
            <h1 id="text" class="col-md-12">
            {this.state.quote}
            </h1>
            <div id="author" className="col-md-12">{this.state.author}</div>
        </div>
        <div id="button-holder" className="col-md-12">
            <button id="new-quote" className="btn btn-secondary myButton col-md-4" onClick={this.newQuote}>More Wisdom</button>
            <a className="myTweets col-md-4 btn btn-primary" id="tweet-quote" href="twitter.com/intent/tweet">Tweet Quote</a>
        </div>
        </div>
    }

}

ReactDOM.render(<QuoteGenerator />, document.getElementById("quote-box"))