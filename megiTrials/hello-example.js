class HelloMessage extends React.Component {
    render() {
        return (
        <div>
            Chicken {this.props.fish}
        </div>
        );
    }
}
  
ReactDOM.render(
    <HelloMessage fish="Taylor" />,
    document.getElementById('hello-example')
);