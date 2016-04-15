export default class Input from React.Component {
  getInitialState: function(){

    return {
      validationStarted: false
    };
  },
  prepareToValidate: function(){},
  componentWillMount: function(){
    var startValidation = function(){
      this.setState({
        validationStarted: true
      })
    }.bind(this);

    // if non-blank email: validate now
    if (this.props.email) {
      startValidation();
    }
    // wait until they start typing, and then stop
    else {
      this.prepareToValidate = _.debounce(startValidation, 1000);
    }
  },

  handleChange: function(e){
    if (!this.state.validationStarted) {
      this.prepareToValidate();
    }
    this.props.onChange && this.props.onChange(e);
  },

  render: function(){
    var className = "";
    if (this.state.validationStarted) {
       className = (this.props.valid ? "valid" : "invalid");
    }
    return (
      <input
        {...this.props}
        className={className}
        onChange={this.handleChange} />
    );
  }
});